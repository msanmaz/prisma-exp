import React from 'react'
import {Button,Center,Text} from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import { BsApple } from 'react-icons/bs'


export const AppleButton = () => {
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
    leftIcon={<BsApple fill="black" />}>
    <Center>
      <Text color='black'>Sign Up with Apple</Text>
    </Center>
  </Button>
  )
}
