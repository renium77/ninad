import { Badge, Box, Button, Container, Text, Link } from '@chakra-ui/react'
import React from 'react'

function ReactRouter() {
  return (
    <div>
        <Container maxW='6xl' p={1}>
                <Box pt='5' bg='black' w={{base:'xs', md:'md'}} p='5' borderRadius='xl' _hover={{cursor:'pointer'}}>
                <Link href='https://www.notion.so/React-Router-v5-vs-v6-114fb92bf06c4112a1e43c0561d74a4d' target="_blank" rel="noreferrer noopener"><Button variant='link' color='white' fontSize='2xl' >React Router v5 vs v6</Button></Link>
                <Text color='white'>Jan 18, 2022</Text>
                <Badge variant='outline' colorScheme='gray'>
                    Tech
                </Badge>
                </Box>
                </Container>
    </div>
  )
}

export default ReactRouter