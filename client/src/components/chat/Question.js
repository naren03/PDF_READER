import React from 'react'
import { Box, Flex ,Text} from '@chakra-ui/react';

const Question = () => {
  return (
    <Flex justifyContent="flex-start">
        <Box bg="blue.500" color="white" borderRadius="10px" padding="10px" mt={2} maxW={"50%"}>
          <Text>What is docker? Explain in detail along with examples</Text>
        </Box>
    </Flex>
  )
}

export default Question