import React from 'react'
import SignInForm from 'components/SignInForm'
import { Center, Heading, VStack,Container,Box } from '@chakra-ui/react'
import { signIn, getSession, getProviders } from "next-auth/react";
import { m } from 'framer-motion';
import CredentialsSignIn from 'components/SignModals/CredentialsSignIn';


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

    
    return (

        <VStack w='full' display={'flex'} justifyContent={'center'} alignItems='center'>
          <Box w={{base:'100%',md:'50%'}} bgColor='gray.700' >

         <CredentialsSignIn providers={providers}/>
          </Box>

        </VStack>




  )
}

export default SignIn