import React, {  useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

import PDFArea from './components/PDFArea';

import { Worker } from '@react-pdf-viewer/core';
import NoPdfSelected from './components/pdf/NoPdfSelected';
import ChatArea from './components/ChatArea';

    
function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [pdfName, setPdfName] = useState("")


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <ChakraProvider>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

        <Grid h='100vh' templateColumns='repeat(8, 1fr)' overflow={"hidden"}>

          {/* SIDEBAR */}
          {isSidebarOpen && (
            <GridItem colSpan={2} bg='#001529' overflow={"scroll"}>
              <Sidebar setPdfName={setPdfName}/>
            </GridItem>
          )}

          {/* PDF AREA*/}
            <GridItem colSpan={isSidebarOpen ? 3 : 4} >
              {pdfName ? <PDFArea toggleSidebar={toggleSidebar} pdfName={pdfName}/> : <NoPdfSelected/> }
            </GridItem>
                    
          {/* CHAT AREA  */}
            <GridItem colSpan={isSidebarOpen ? 3 : 4}  >
              <ChatArea/>
            </GridItem>
        </Grid>
      </Worker>
    </ChakraProvider>
  );
}

export default App;
