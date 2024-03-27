import React , {useEffect,useState} from 'react'

import { Flex, Box } from '@chakra-ui/react'
import FileUpload from './sidebar/FileUpload'
import Pdf from './sidebar/Pdf'



const Sidebar = ({setPdfName}) => {

    const [pdfs, setPdfs] = useState([])
 
    useEffect(()=>{
        fetchData();
      },[]);
    
    const fetchData = async () => {
        try {
          // Make a GET request to the API endpoint
          const response = await fetch('http://localhost:8080/get-all-pdfs');
      
          // Check if the response is successful (status code 200)
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
      
          // Parse the response body as JSON
          const data = await response.json();
      
          // Do something with the data
          console.log(data.pdfs);
    
          setPdfs(data.pdfs);
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error.message);
        }
      };
      

    return (
        <>
          <Flex color='white'  direction="column" gap={2} m={2}  >
            {/* FILE UPLOAD */}
            <Box w='100%'  height={"15vh"}>
                <FileUpload fetchData={fetchData}/>
            </Box>
           
            {/* DISPLAYING ALL PDF NAMES */}
            {pdfs && pdfs.map((pdf, index) => (
                <Box key={index} w='100%' height={"10vh"} mt={2}>
                    <Pdf name={pdf} setPdfName={setPdfName} />
                </Box>
            ))}
            
         </Flex>
        </>
      )
}

export default Sidebar
