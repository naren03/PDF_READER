import React from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
      
const PDFViewer = ({pdfName}) => {

  return (

      <div
          style={{
              height:"89vh"
          }}
      >
          <Viewer fileUrl={`http://localhost:8080/${pdfName}`} />
      </div>
  );
};

export default PDFViewer;
