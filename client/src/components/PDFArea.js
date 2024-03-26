import React, { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Icon,Text ,Flex} from '@chakra-ui/react'

import PDFViewer from './PDFViewer';


const PDFArea = ({toggleSidebar,pdfName}) => {

  return (
    <>
        <Flex alignItems={"center"} p={3}>
            <Icon as={HamburgerIcon} onClick={toggleSidebar} ml={2} mr={2} fontSize={"26px"} />
            <Text  fontSize={"16px"}>{pdfName}</Text>
        </Flex>
        <PDFViewer pdfName={pdfName}/>
    </>
  )
}

export default PDFArea