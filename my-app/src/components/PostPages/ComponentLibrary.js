import { Badge, Box, Button, Container, Text, Link } from '@chakra-ui/react'
import React from 'react'

function ComponentLibrary() {
  return (
    <div>
        <Container maxW='6xl' p={1}>
                <Box pt='5' bg='black' w={{base:'xs', md:'md'}} p='5' borderRadius='xl' _hover={{cursor:'pointer'}}>
                <Link href='https://www.notion.so/Choosing-the-right-component-library-for-your-Project-cf4ec20fea934c9196888a549069ed33' target="_blank" rel="noreferrer noopener"><Button variant='link' color='white' fontSize={{base:'md',md:'xl'}} >Choosing the right comp. library</Button></Link>
                <Text color='white'>Jan 22, 2022</Text>
                <Badge variant='outline' colorScheme='gray'>
                    Tech
                </Badge>
                </Box>
                </Container>
    </div>
  )
}

export default ComponentLibrary