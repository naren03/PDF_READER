import React from 'react';
import { Box,  Icon ,Text} from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons'


const Pdf = ({name,setPdfName}) => {

  const handlePdfClick = () => {

    console.log("PDF clicked");
    setPdfName(name);
    
  };

  return (
    <Box
      p={3}
      borderRadius="md" // Curved border
      _hover={{ cursor: 'pointer' }}
      onClick={handlePdfClick}
      display="flex"
      alignItems="center"
      bg="#1777ff"
      height={"100%"}
    >
        <Icon as={AttachmentIcon}  mr={2}/>
        <Text>{name}</Text>
      
    </Box>
  );
};

export default Pdf;
