import React, { useState, useRef } from 'react';
import { Box, Text, Input, Center,Icon,Flex } from '@chakra-ui/react';
import {  AddIcon } from '@chakra-ui/icons'

const FileUpload = ({fetchData}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("file changed");
    uploadFile(event.target.files[0]);
    
  };

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append('pdf', file);
      console.log(file);

      // Make an HTTP POST request to your backend API to upload the file
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      fetchData();
      setSelectedFile(null)
      console.log('File uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


  const handleDragOver = (event) => {
    event.preventDefault();
    console.log("File Uploaded using drag");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
    console.log("drop")
    uploadFile(event.dataTransfer.files[0])
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
    console.log("clicked");
  };

  return (
    <Box
      pt={2}
      borderWidth={2}
      height={"100%"}
      borderStyle="dashed"
      borderRadius="lg"
      textAlign="center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      cursor="pointer"
      onClick={handleBoxClick}
      color="white.500"
      bg='#324352'
    >
      <Input ref={fileInputRef} type="file" display="none"  onChange={handleFileChange} />
      {!selectedFile ? (
        <>
        <Center>
        <Flex align="center">
            <Icon as={AddIcon} fontSize="21px" mr={2}/>
            <Text fontSize="21px">New Chat</Text>
        </Flex>
        </Center>
        <Text mt={2} fontSize={"16px"}>Drop PDF here</Text>
        </>
      ) : (
        <Center>
          <Text>{selectedFile.name}</Text>
        </Center>
      )}
    </Box>
  );
};

export default FileUpload;
