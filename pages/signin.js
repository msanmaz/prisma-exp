import React from 'react'
import SignInForm from 'components/SignInForm'
import { Center, Heading, VStack,Container,Box } from '@chakra-ui/react'
import { signIn, getSession, getProviders } from "next-auth/react";
import { m } from 'framer-motion';


export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(session) {
    return {
      redirect: {
        permanent:false,
        destination:'/'
      }
    }
  }
  return {
    props: {
      providers:await getProviders(context),
    }
  }
}



const SignIn = ({providers}) => {

  const addressParams = [
    { name: "email", type: 'text', alias: 'email',style:'100%', minLength:3 },
    { name: "password", type: 'password', alias: 'Password' ,style:'100%'},
    { name: "credentialsID", type: 'hidden' },

  ]

    
    return (

        <VStack w='full' display={'flex'} justifyContent={'center'} alignItems='center'>
          <Box w={{base:'100%',md:'50%'}} bgColor='gray.700' >
          <Center>
        <Heading mt={'2rem'}>Sign In</Heading>
        </Center>

         <SignInForm addressParams={addressParams} providers={providers}  />
          </Box>

        </VStack>




  )
}

export default SignIn