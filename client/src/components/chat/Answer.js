import React from 'react'
import { Box, Flex ,Text} from '@chakra-ui/react';


const Answer = () => {
  return (
    <Flex justifyContent="flex-end">
        <Box bg="green.500" color="white" borderRadius="10px" padding="10px" mt={3} maxW={"70%"}>
          <Text>Docker is an open-source containerization platform by which you can pack your application and all its dependencies into a standardized unit called a container. Containers are light in weight which makes them portable and they are isolated from the underlying infrastructure and from each other container. You can run the docker image as a docker container in any machine where docker is installed without depending on the operating system.</Text>
        </Box>
    </Flex>
  )
}

export default Answer