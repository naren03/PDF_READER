import React from 'react';
import { Box} from '@chakra-ui/react';

import Question from './Question';
import Answer from './Answer';

const Chats = () => {
  return (
    <Box p={2} overflowY="auto" maxHeight="calc(100vh - 120px)" > 
        <Question/>
        <Answer/>
        <Question/>
        <Answer/>
        <Question/>
        <Answer/>
        <Question/>
        <Answer/>
    </Box>
  )
}

export default Chats