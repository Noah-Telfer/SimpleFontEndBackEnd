// src/pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProjectPdf } from '../services/projectService';
import { Box, Typography } from '@mui/material';
import PdfViewer from '../utils/PdfViewer'; // Assuming you have a PdfViewer component


export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProjectPdf(id).then(setPdfBase64).catch(console.error);
    }
  }, [id]);

   if (!pdfBase64) return <div>Loading PDF...</div>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Project PDF
      </Typography>
      <Box
        sx={{
          height: '90vh',
          width: '100%',
          overflow: 'auto',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        >
        <PdfViewer base64={pdfBase64} title={`Project PDF - ${id}`} />
        </Box>
    </Box>
  );
}