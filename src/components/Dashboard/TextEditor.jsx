import React, { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DOMPurify from 'dompurify';

function TextEditor({ onChange, initialValue}) {
  const [editorData, setEditorData] = useState(DOMPurify.sanitize(initialValue || ''));
  const isMounted = useRef(false); // ref to track component mounting
  
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

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        // onReady={editor => {
        //     console.log('Editor is ready to use!', editor);
        //     // Log the names of plugins included in the build
        //     console.log('Built-in plugins:', ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName));
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