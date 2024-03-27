import React from 'react';
import { Box } from '@chakra-ui/react';

import ChatNavbar from './chat/ChatNavbar';
import Chats from './chat/Chats';
import InputForm from './chat/InputForm';



const ChatArea = () => {
  
  return (
    <Box >
      {/* Navbar */}
      <ChatNavbar/>  
  
      {/* CHATS DISPLAY */}
      <Chats/>

      {/* INPUT FIELD WITH BUTTON */}
      <InputForm/>
  
    </Box>
  );
};

export default ChatArea;
