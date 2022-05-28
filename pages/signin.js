import React from 'react'
import SignInForm from 'components/SignInForm'
import { Center, Heading, VStack,Container,Box } from '@chakra-ui/react'


const addressParams = [
    { name: "email", type: 'text', alias: 'email',style:'100%', minLength:3 },
    { name: "password", type: 'password', alias: 'Password' ,style:'100%'},
  ]

const SignIn = () => {


    
    return (

        <VStack w='full' display={'flex'} justifyContent={'center'} alignItems='center'>
          <Box w='50%' bgColor='gray.700' >
          <Center>
        <Heading mt={'2rem'}>Sign Up</Heading>
        </Center>

      <SignInForm addressParams={addressParams}  />
          </Box>

        </VStack>




  )
}

export default SignIn