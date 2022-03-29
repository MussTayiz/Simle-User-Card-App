import React from 'react'
import { Flex, Box, Spacer, Heading, Button } from '@chakra-ui/react'
function Header() {
  return (
    <Flex m='5'>
        <Box p='2'>
          <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
        <Box >
          <Button colorScheme='teal' mr='4'>
            Sign Up
          </Button>
          <Button colorScheme='teal'>Log in</Button>
        </Box>
      </Flex>
  )
}

export default Header