import React from 'react'
import {Button,Center,Text} from '@chakra-ui/react'

export const SignInButton =  React.forwardRef(({name,color,textColor,onOpen,hoverbg}) => {

  return (
    <Button onClick={onOpen}
    w={{ base: '100%', md: '50%' }}
    rounded='full'
    border='1px'
    _hover={{
      background:'twitter.600',
    }}
    bgColor={color}
    borderColor={'gray.300'}
    maxW={'md'}
    variant={'outline'}>
    <Center>
      <Text color={textColor} >{name}</Text>
    </Center>
  </Button>
  )
})
