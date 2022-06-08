import { VStack, Stack, Image, Box, HStack, Heading, Button, Center, Text, useDisclosure } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { AppleButton } from "./Buttons/AppleButton";
import { GoogleButton } from "./Buttons/GoogleButton";
import { SignInButton } from "./Buttons/SignInButton";
import { useRef } from 'react'
import CredentialsSignUp from "./SignModals/CredentialsSignUp";
import CredentialsSignIn from "./SignModals/CredentialsSignIn";


function Login({ providers }) {

  return (
    <Stack bgColor='white' w='full' display={'flex'} direction={{ base: 'column-reverse', md: 'row' }} h={{ base: 'full', md: '100vh' }}>
      <VStack w={{ base: '100%', md: '54%' }} h='full'>
        <Box h='full'>
          <Image objectFit='cover' h='full' src='lohp_en_1302x955.png' />
          <Box position={'absolute'} top={{ md: '26%' }} bottom={{ base: '3%' }} left={{ base: '20%', md: '16.5%' }}>
            <Image src='https://rb.gy/ogau5a' h={{ base: '15rem', md: '21rem' }} w={{ base: '15rem', md: '21rem' }} />

          </Box>

        </Box>
      </VStack>


      <VStack w={{ base: '100%', md: '46%' }} h='full'>
        <RightSide />
      </VStack>




    </Stack>
  );
}




function RightSide() {
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal
  } = useDisclosure()

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure()



  return (
    <>


      <CredentialsSignUp isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
      <CredentialsSignIn isOpen={isOpen} onClose={onClose} />

      <Box px='2rem' w='full' my='2rem' position={'relative'} >
        <svg className="h-[3rem]" fill="rgb(29, 155, 240)" viewBox="0 0 24 24" aria-hidden='true'>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </svg>

      </Box>

      <Box px='2rem' pt='1rem' w='full'>
        <Heading color='black' fontSize={{ base: '5xl', md: '7xl' }}>Happening now</Heading>
      </Box>

      <Box px='2rem' pt='3rem' w='full'>
        <Heading color='black' fontSize={'4xl'}>Join Twitter today.</Heading>
      </Box>




      <Box w='full' px='2rem' pt='2rem'>
        <GoogleButton />
      </Box>

      <Box w='full' px='2rem' pt='0.5rem'>
        <AppleButton />
      </Box>



      <Box w={{ base: '100%', md: '60%' }} h='1.7rem' px='2rem' pt='0.2rem'>
        <Box w='full' display='flex' justifyContent={{ base: 'center', md: 'flex-start' }} alignContent={{ base: 'center', md: 'flex-start' }}>
          <Text color='gray.700'>or</Text><br />
        </Box>


      </Box>



      <Box w='full' px='2rem'>

        <SignInButton color='twitter.500' onOpen={onOpenLoginModal} textColor={'white'} name={'Sign Up with email or phone'} />



        <Text px='0.2rem' py='0.3rem' fontSize={'8pt'} color='black'>
          By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including Cookie Use.
        </Text>

      </Box>


      <Box w='full' px='2rem' pt='0.5rem'>
        <Heading color='black' py='1rem' fontSize={'large'}>Already have an account?</Heading>


        <SignInButton color='white' onOpen={onOpen} textColor={'twitter.500'} name={'Sign In'} />

        <Button onClick={() => signIn('credentials', {
          email: 'aya@aya.com',
          password: '123123123'
        })}
          w={{ base: '100%', md: '30%' }}
          rounded='full'
          border='1px'
          mx={{ base: 0, md: '1rem' }}
          my={{ base: '1rem', md: 0 }}
          _hover={{
            background: 'gray.200'
          }}
          borderColor={'gray.300'}
          maxW={'md'}
          variant={'outline'}>
          <Center>
            <Text color='twitter.500'>Sign In as test user</Text>
          </Center>
        </Button>

      </Box>






    </>
  )
}


export default Login;