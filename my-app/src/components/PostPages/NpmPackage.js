import { Badge, Box, Button, Container, Text, Link } from '@chakra-ui/react'
import React from 'react'

function NpmPackage() {
  return (
    <div>
        <Container maxW='6xl' p={1}>
                <Box pt='5' bg='black' w={{base:'xs', md:'md'}} p='5' borderRadius='xl' _hover={{cursor:'pointer'}}>
                <Link href='https://www.notion.so/How-to-publish-a-ReactJS-Component-to-NPM-using-create-react-app-70873d6fa6664f21a57da43a0147a004' target="_blank" rel="noreferrer noopener"><Button variant='link' color='white' fontSize={{base:'md',md:'xl'}} >Publish a ReactJS Component to NPM.</Button></Link>
                <Text color='white'>Jan 5, 2022</Text>
                <Badge variant='outline' colorScheme='gray'>
                    Tech
                </Badge>
                </Box>
                </Container>
    </div>
  )
}

export default NpmPackage