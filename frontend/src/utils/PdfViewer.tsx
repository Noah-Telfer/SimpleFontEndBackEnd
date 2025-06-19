// src/components/PdfViewer.tsx
import React from 'react';

type PdfViewerProps = {
  base64: string;
  title?: string;
};

const PdfViewer: React.FC<PdfViewerProps> = ({ base64, title }) => {
  const pdfUrl = `data:application/pdf;base64,${base64}`;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2>{title}</h2>
      <iframe
        src={pdfUrl}
        title={title}
        style={{ width: '100%', height: '90vh', border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;
