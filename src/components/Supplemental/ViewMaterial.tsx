// src/components/Supplemental/ViewMaterial.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Box, Typography, IconButton, Tooltip, CircularProgress, Link as MuiLink } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Material } from '../../types/Material';
import SideBar from './SideBar';
import BackToAllMaterialsButton from './BackToAllMaterialsButton';

const ViewMaterial: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const db = getFirestore();
  const [materialData, setMaterialData] = useState<Material | null>(null);
  const [selectedSection, setSelectedSection] = useState<{ sectionIndex?: number, subsectionIndex?: number, subSubsectionIndex?: number, type?: 'header' | 'footer' }>({ sectionIndex: 0 });

  useEffect(() => {
    if (id) {
      const fetchMaterial = async () => {
        const docRef = doc(db, 'materials', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMaterialData({ id: docSnap.id, ...docSnap.data() } as Material);
        }
      };
      fetchMaterial();
    }
  }, [id, db]);

  const handleSelectSection = (sectionIndex: number | 'header' | 'footer', subsectionIndex?: number, subSubsectionIndex?: number) => {
    setSelectedSection({ sectionIndex: typeof sectionIndex === 'number' ? sectionIndex : undefined, subsectionIndex, subSubsectionIndex, type: typeof sectionIndex === 'string' ? sectionIndex : undefined });
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const { sectionIndex, subsectionIndex, subSubsectionIndex, type } = selectedSection;

    if (direction === 'prev') {
      if (subSubsectionIndex !== undefined && subSubsectionIndex > 0) {
        setSelectedSection({ sectionIndex, subsectionIndex, subSubsectionIndex: subSubsectionIndex - 1 });
      } else if (subSubsectionIndex !== undefined && subSubsectionIndex === 0) {
        setSelectedSection({ sectionIndex, subsectionIndex });
      } else if (subsectionIndex !== undefined && subsectionIndex > 0) {
        setSelectedSection({ sectionIndex, subsectionIndex: subsectionIndex - 1 });
      } else if (subsectionIndex !== undefined && subsectionIndex === 0) {
        setSelectedSection({ sectionIndex });
      } else if (sectionIndex! > 0) {
        const prevSection = materialData?.sections[sectionIndex! - 1];
        setSelectedSection({
          sectionIndex: sectionIndex! - 1,
          subsectionIndex: prevSection?.subsections.length ? prevSection.subsections.length - 1 : undefined,
          subSubsectionIndex: prevSection?.subsections.length ? prevSection.subsections[prevSection.subsections.length - 1].subSubsections.length - 1 : undefined,
        });
      } else if (type === 'footer') {
        setSelectedSection({ sectionIndex: materialData?.sections.length! - 1, type: 'footer' });
      } else if (sectionIndex === undefined && type === 'header') {
        setSelectedSection({ sectionIndex: materialData?.sections.length! - 1 });
      }
    } else if (direction === 'next') {
      if (subSubsectionIndex === undefined && subsectionIndex !== undefined && materialData?.sections[sectionIndex!].subsections[subsectionIndex].subSubsections.length) {
        setSelectedSection({ sectionIndex, subsectionIndex, subSubsectionIndex: 0 });
      } else if (subSubsectionIndex !== undefined && subSubsectionIndex < materialData?.sections[sectionIndex!].subsections[subsectionIndex!].subSubsections.length! - 1) {
        setSelectedSection({ sectionIndex, subsectionIndex, subSubsectionIndex: subSubsectionIndex + 1 });
      } else if (subSubsectionIndex !== undefined && subSubsectionIndex === materialData?.sections[sectionIndex!].subsections[subsectionIndex!].subSubsections.length! - 1 && subsectionIndex! < materialData?.sections[sectionIndex!].subsections.length! - 1) {
        setSelectedSection({ sectionIndex, subsectionIndex: subsectionIndex! + 1 });
      } else if (subsectionIndex === undefined && materialData?.sections[sectionIndex!].subsections.length) {
        setSelectedSection({ sectionIndex, subsectionIndex: 0 });
      } else if (subsectionIndex !== undefined && subsectionIndex < materialData?.sections[sectionIndex!].subsections.length! - 1) {
        setSelectedSection({ sectionIndex, subsectionIndex: subsectionIndex + 1 });
      } else if (subsectionIndex !== undefined && subsectionIndex === materialData?.sections[sectionIndex!].subsections.length! - 1 && sectionIndex! < materialData?.sections.length! - 1) {
        setSelectedSection({ sectionIndex: sectionIndex! + 1 });
      } else if (sectionIndex! < materialData?.sections.length! - 1) {
        setSelectedSection({ sectionIndex: sectionIndex! + 1 });
      } else if (sectionIndex === materialData?.sections.length! - 1 && subsectionIndex === undefined) {
        setSelectedSection({ sectionIndex: undefined, type: 'footer' });
      }
    }
  };

  if (!materialData) return <CircularProgress />;

  const currentContent = selectedSection.type === 'header' || selectedSection.type === 'footer'
    ? ''
    : selectedSection.sectionIndex !== undefined
        ? selectedSection.subSubsectionIndex !== undefined
          ? materialData.sections[selectedSection.sectionIndex]?.subsections[selectedSection.subsectionIndex!]?.subSubsections[selectedSection.subSubsectionIndex]?.content || ''
          : selectedSection.subsectionIndex !== undefined
            ? materialData.sections[selectedSection.sectionIndex]?.subsections[selectedSection.subsectionIndex!]?.content || ''
            : materialData.sections[selectedSection.sectionIndex]?.content || ''
        : '';

  const currentTitle = selectedSection.type === 'header' || selectedSection.type === 'footer'
    ? ''
    : selectedSection.sectionIndex !== undefined
        ? selectedSection.subSubsectionIndex !== undefined
          ? materialData.sections[selectedSection.sectionIndex]?.subsections[selectedSection.subsectionIndex!]?.subSubsections[selectedSection.subSubsectionIndex]?.title || ''
          : selectedSection.subsectionIndex !== undefined
            ? materialData.sections[selectedSection.sectionIndex]?.subsections[selectedSection.subsectionIndex!]?.title || ''
            : materialData.sections[selectedSection.sectionIndex]?.title || ''
        : '';
  
  const currentLinks = selectedSection.sectionIndex !== undefined
      ? selectedSection.subSubsectionIndex !== undefined
        ? materialData.sections[selectedSection.sectionIndex]?.subsections[selectedSection.subsectionIndex!]?.subSubsections[selectedSection.subSubsectionIndex]?.links || []
        : selectedSection.subsectionIndex !== undefined
            ? materialData.sections[selectedSection.sectionIndex]?.subsections[selectedSection.subsectionIndex!]?.links || []
            : materialData.sections[selectedSection.sectionIndex]?.links || []
      : [];
   
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ width: '450px', ml: 2, mt: 2 }}>
          <BackToAllMaterialsButton />
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Box sx={{ width: '450px', minWidth: '450px', maxWidth: '450px', borderRight: '1px solid #ddd', padding: 2 }}>
            <SideBar
              sections={materialData.sections}
              selected={selectedSection}
              onAddSection={() => {}}
              onAddSubsection={() => {}}
              onAddSubSubsection={() => {}}
              onSelectSection={handleSelectSection}
              onUpdateSectionTitle={() => {}}
              onUpdateSubsectionTitle={() => {}}
              onUpdateSubSubsectionTitle={() => {}}
              onDeleteSection={() => {}}
              onDeleteSubsection={() => {}}
              onDeleteSubSubsection={() => {}}
              isViewMode={true} // New prop to disable editing
            />
          </Box>
          <Box sx={{ flexGrow: 1, padding: 3 }}>
            <hr /> {/* Horizontal line above the header */}
            <Box sx={{ border: selectedSection.type === 'header' ? '2px solid blue' : 'none', borderRadius: 1, padding: 2, mb: 2 }}>
              <Typography dangerouslySetInnerHTML={{ __html: materialData.header.content.replace(/\n/g, '<br />') }} />
            </Box>
            <hr /> {/* Horizontal line below the header */}
            <Typography variant="h3" align="center" gutterBottom>
              {materialData.title}
            </Typography>
            <hr /> {/* Horizontal line below the title */}
            <Typography variant="h4" align="center" gutterBottom>
              {currentTitle}
            </Typography>
            {selectedSection.type !== 'header' && selectedSection.type !== 'footer' && (
              <>
                <Box
                  sx={{
                    mb: 2,
                    border: selectedSection.sectionIndex !== undefined && selectedSection.subsectionIndex === undefined ? '2px solid blue' : selectedSection.subSubsectionIndex !== undefined ? '2px solid red' : selectedSection.subsectionIndex !== undefined ? '2px solid green' : 'none',
                    borderRadius: 1,
                    padding: 2,
                  }}
                >
                  <Typography dangerouslySetInnerHTML={{ __html: currentContent.replace(/\n/g, '<br />') }} />
                  <Box>
                    {selectedSection.sectionIndex !== undefined && (
                      <>
                        {selectedSection.subSubsectionIndex !== undefined
                          ? materialData.sections[selectedSection.sectionIndex].subsections[selectedSection.subsectionIndex!].subSubsections[selectedSection.subSubsectionIndex].images.length > 0 && (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                              {materialData.sections[selectedSection.sectionIndex].subsections[selectedSection.subsectionIndex!].subSubsections[selectedSection.subSubsectionIndex].images.map((image, index) => (
                                <Box key={index} sx={{ position: 'relative', mr: 2, mb: 2 }}>
                                  <img src={image.url} alt={`Sub-subsection ${selectedSection.subSubsectionIndex! + 1} Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '500px' }} />
                                  <Typography>{image.title}</Typography> {/* Display image title */}
                                </Box>
                              ))}
                            </Box>
                          )
                          : selectedSection.subsectionIndex !== undefined
                            ? materialData.sections[selectedSection.sectionIndex].subsections[selectedSection.subsectionIndex].images.length > 0 && (
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                                {materialData.sections[selectedSection.sectionIndex].subsections[selectedSection.subsectionIndex].images.map((image, index) => (
                                  <Box key={index} sx={{ position: 'relative', mr: 2, mb: 2 }}>
                                    <img src={image.url} alt={`Subsection ${selectedSection.subsectionIndex! + 1} Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '500px' }} />
                                    <Typography>{image.title}</Typography> {/* Display image title */}
                                  </Box>
                                ))}
                              </Box>
                            )
                            : materialData.sections[selectedSection.sectionIndex].images.length > 0 && (
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                                {materialData.sections[selectedSection.sectionIndex].images.map((image, index) => (
                                  <Box key={index} sx={{ position: 'relative', mr: 2, mb: 2 }}>
                                    <img src={image.url} alt={`Section ${selectedSection.sectionIndex! + 1} Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '500px' }} />
                                    <Typography>{image.title}</Typography> {/* Display image title */}
                                  </Box>
                                ))}
                              </Box>
                            )}
                      </>
                    )}
                  </Box>
                </Box>
                {currentLinks.length > 0 && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">Links</Typography>
                    {currentLinks.map((link, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography sx={{ flexBasis: '20%' }}>{link.title}</Typography>
                        <MuiLink sx={{ flexBasis: '40%' }} href={link.url} target="_blank" rel="noopener">
                          {link.url}
                        </MuiLink>
                        <Typography sx={{ flexBasis: '40%' }}>{link.description}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Tooltip title="Previous Section/Subsection (Left Arrow)" arrow>
                <span>
                  <IconButton
                    onClick={() => handleNavigate('prev')}
                    disabled={selectedSection.sectionIndex === 0 && selectedSection.subsectionIndex === undefined && selectedSection.type === 'header'}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip title="Next Section/Subsection (Right Arrow)" arrow>
                <span>
                  <IconButton
                    onClick={() => handleNavigate('next')}
                    disabled={
                      selectedSection.sectionIndex === materialData.sections.length - 1 &&
                      (selectedSection.subsectionIndex === undefined ||
                        selectedSection.subsectionIndex === materialData.sections[selectedSection.sectionIndex!].subsections.length - 1) &&
                      selectedSection.type === 'footer'
                    }
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
            <hr /> {/* Horizontal line above the footer */}
            <Box sx={{ border: selectedSection.type === 'footer' ? '2px solid blue' : 'none', borderRadius: 1, padding: 2, mt: 2 }}>
              <Typography dangerouslySetInnerHTML={{ __html: materialData.footer.content.replace(/\n/g, '<br />') }} />
            </Box>
            <hr /> {/* Horizontal line below the footer */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewMaterial;