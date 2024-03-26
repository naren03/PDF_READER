import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react';

const NoPdfSelected = () => {
  return (
    <Center h="100vh">
      <Box>
        <Center>
            <Text fontSize='26px' as="b">No PDF selected</Text>
        </Center>
        <Center>
            <Text>Select PDF from Sidebar</Text>
        </Center>
        

        
      </Box>
    </Center>
  )
}

export default NoPdfSelected