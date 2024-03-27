import React from 'react';
import { Flex ,Text, Tooltip} from '@chakra-ui/react';
import { DeleteIcon , DownloadIcon, ExternalLinkIcon, EditIcon} from '@chakra-ui/icons'

const ChatNavbar = () => {
  return (
    <Flex
        borderBottom="1px solid #ccc"
        padding="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>Chat with Docker 101</Text>
        <Flex  justifyContent="space-between"  alignItems="center" w={"150px"} p={2} mr={2}>
            <Tooltip label="Edit"  hasArrow>
                <EditIcon />
            </Tooltip>
            <Tooltip label="Share"  hasArrow>
                <ExternalLinkIcon/>
            </Tooltip>
            <Tooltip label="Download"  hasArrow>
                <DownloadIcon />
            </Tooltip>
            <Tooltip label="Delete"  hasArrow>
                <DeleteIcon />
            </Tooltip>
        </Flex>
    </Flex>
   
  )
}

export default ChatNavbar