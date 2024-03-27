import React from 'react';
import {  Flex ,Input,Button} from '@chakra-ui/react';
import {  ArrowUpIcon} from '@chakra-ui/icons'


const InputForm = () => {

  const handleSubmit = (e)=>{

    e.preventDefault();
    alert("clicked")
  }
  
  return (
    <Flex as="form" position="sticky" bottom="0" left="0" right="0" p={2} borderTop="1px solid #ccc" bg="white" onSubmit={handleSubmit}>
        <Input placeholder="Type your query" flex="1" mr={2} />
        <Button type="submit" leftIcon={<ArrowUpIcon />} colorScheme='blue' variant='solid' pr={2}/>
    </Flex>
  )
}

export default InputForm