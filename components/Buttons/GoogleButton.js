import React from 'react'
import {Button,Center,Text} from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'


export const GoogleButton = () => {
  return (
    <Button onClick={() => signIn('google')}
    w={{ base: '100%', md: '50%' }}
    rounded='full'
    border='1px'
    _hover={{
      background: 'gray.200'
    }}
    borderColor={'gray.300'}
    maxW={'md'}
    variant={'outline'}
    leftIcon={<FcGoogle/>}
    >
    <Center>
      <Text color='black'>Sign Up with Google</Text>
    </Center>
  </Button>
  )
}
