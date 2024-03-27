import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Icon,Text ,Flex} from '@chakra-ui/react'

import PDFViewer from './pdf/PDFViewer';


const PDFArea = ({toggleSidebar,pdfName}) => {

  return (
    <>
        {/* PDF NAVBAR */}
        <Flex alignItems={"center"} p={3}>
            <Icon as={HamburgerIcon} onClick={toggleSidebar} ml={2} mr={2} fontSize={"26px"} />
            <Text  fontSize={"16px"}>{pdfName}</Text>
        </Flex>
        {/* PDF DISPLAYING*/}
        <PDFViewer pdfName={pdfName}/>
    </>
  )
}

export default PDFArea