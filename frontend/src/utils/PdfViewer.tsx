// src/components/PdfViewer.tsx
import React from 'react';
import  { useState } from 'react';
import { Box } from '@mui/material';
type PdfViewerProps = {
  base64: string;
  title?: string;
};

type Base64ToBlobFunction = (base64String: string, contentType?: string) => string;

const base64ToBlob: Base64ToBlobFunction = (base64String, contentType) => {
  // Remove data URL prefix if it exists
  var base64Data = base64String.replace(/^data:([^;]+);base64,/, '');

  // Convert base64 to raw binary data
  var binaryData = atob(base64Data);

  // Create array buffer from binary data
  var arrayBuffer = new ArrayBuffer(binaryData.length);
  var uint8Array = new Uint8Array(arrayBuffer);

  // Fill array buffer with binary data
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // Create blob from array buffer
  var blob = new Blob([arrayBuffer], { type: contentType });

  // Create and return blob URL
  return URL.createObjectURL(blob);
};

// Note: blobUrl is not used, so it is removed.

const PdfViewer: React.FC<PdfViewerProps> = ({ base64, title }) => {
    const [isLoading, setIsLoading] = useState(true);

    if (!base64) {
    return <div>No PDF data provided.</div>; // or null
  }
  const blobUrl = base64ToBlob(base64, 'application/pdf');

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h2>{title}</h2>
       {isLoading && <p>Loading PDF...</p>}

      <iframe
        src={blobUrl}
        title={title}
        style={{ width: '100%', height: '90vh', border: 'none' }}
                onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          console.error('Failed to load PDF in iframe');
        }
      }
      />
    </div>
  );
};

export default PdfViewer;
