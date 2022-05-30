import React from 'react'
import SignupForm from 'components/SignupForm'
import { Center, Heading, VStack,Container,Box } from '@chakra-ui/react'
import { getSession } from 'next-auth/react'


const addressParams = [
    { name: "username", type: 'text', alias: 'username',style:'100%', minLength:3 },
    { name: "email", type: 'email', alias: 'Email',style:'100%', pattern: /^\S+@\S+$/i, length:80},
    { name: "password", type: 'password', alias: 'Password' ,style:'100%'},
    { name: "confirmpass", type: 'tel', alias: 'Confirm Pass' ,style:'100%'},
  ]

const signup = () => {


    
    return (

        <VStack w='full' display={'flex'} justifyContent={'center'} alignItems='center'>
          <Box w='50%' bgColor='gray.700' >
          <Center>
        <Heading mt={'2rem'}>Sign Up</Heading>
        </Center>

      <SignupForm addressParams={addressParams}  />
          </Box>

        </VStack>




  )
}
export async function getServerSideProps(context) {

  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {session}
  };
}



export default signup