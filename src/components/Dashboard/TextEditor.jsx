import React, { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DOMPurify from 'dompurify';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

function TextEditor({ onChange, initialValue}) {
  const [editorData, setEditorData] = useState(DOMPurify.sanitize(initialValue || ''));
  const isMounted = useRef(false); // ref to track component mounting
  const editorRef = useRef(null);

  const [selectedSymbol, setSelectedSymbol] = useState("");
  
  // Effect for initializing and responding to changes in initialValue
  useEffect(() => {
    // Run only when initialValue changes and after the first render
    if (isMounted.current) {
      setEditorData(DOMPurify.sanitize(initialValue || ''));
    } else {
      isMounted.current = true;
    }
  }, [initialValue]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    const cleanData = DOMPurify.sanitize(data); // Sanitize the data from CKEditor
    setEditorData(cleanData); // Update internal state with sanitized data
    // console.log({ event, editor, data: cleanData }); // Log the sanitized data
    onChange(cleanData); // Pass sanitized data to the parent component
  };

  const insertSymbol = (symbol) => {
    if (!editorRef.current) {
      console.warn("Editor not initialized");
      return;
    }
    
    // Get the editor instance
    const editor = editorRef.current;

    // Insert the symbol at the current cursor position
    editor.model.change(writer => {
      const position = editor.model.document.selection.getFirstPosition();
      writer.insertText(symbol, position);
    });
    setSelectedSymbol(""); // Reset the dropdown after inserting symbol
  };

  const handleSymbolChange = (event) => {
    insertSymbol(event.target.value);
  };

  const greekLetters = [
    'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 
    'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'
  ];

  const mathOperators = [
    '°', '+', '-', '=', '~', '≥', '≤', '≠', '>', '<', '*', '/', '%'
  ];

  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
      }}>
        <InputLabel id="insert-symbols-label" sx={{ fontSize: '0.8rem' }}>Insert Symbols: </InputLabel>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 40 }}>
          <Select
            labelId="math-operators-label"
            id="math-operators"
            value={selectedSymbol}
            onChange={handleSymbolChange}
            displayEmpty
          >
            <MenuItem value="" disabled>Math</MenuItem>
            {mathOperators.map(op => (
                <MenuItem key={op} value={op}>{op}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 40 }}>
          <Select
            labelId="greek-letters-label"
            id="greek-letters"
            value={selectedSymbol}
            onChange={handleSymbolChange}
            displayEmpty
          >
            <MenuItem value="" disabled>Greek</MenuItem>
            {greekLetters.map(letter => (
                <MenuItem key={letter} value={letter}>{letter}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {/* CKEditor instance */}
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onReady={editor => {
          editorRef.current = editor; // Use ref to manage the editor instance
        }}
        config={{
          toolbar: [
            'undo', 'redo', '|',
            'heading', 'bold', 'italic', '|', 
            'bulletedList', 'numberedList', 'blockQuote', 'indent', 'outdent', '|',
            'link', 'insertTable', '|' // Exclude 'imageUpload' from the array
          ],
          table: {
            contentToolbar: [
              'tableColumn', 'tableRow', 'mergeTableCells'
            ]
          },
        }}
        // onReady={editor => {
        //   console.log('Editor is ready to use!', editor);
  
        //   // Access the available plugins from the editor instance
        //   const availablePlugins = editor.plugins._availablePlugins;

        //   // Log the names of the available plugins
        //   if (availablePlugins instanceof Map) {
        //       console.log('Available plugins:', Array.from(availablePlugins.keys()));
        //   } else {
        //       console.log('Available plugins data structure has changed or is not accessible.');
        //   }
        // }}         
        onChange={handleEditorChange} // Use the handleEditorChange function here
        // onBlur={(event, editor) => {
        //   console.log('Blur.', editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log('Focus.', editor);
        // }}
      />
    </div>
  );
}

export default TextEditor;