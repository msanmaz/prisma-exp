import React from 'react'
import {VStack,useDisclosure, Stack,Flex, Modal, ModalOverlay, ModalBody, Heading, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import FormInput from 'components/Forminput';
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";



const addressParams = [
    { name: "email", type: 'text', alias: 'email',style:'100%', minLength:3 },
    { name: "password", type: 'password', alias: 'Password' ,style:'100%'},
    { name: "credentialsID", type: 'hidden' },
  ]



function CredentialsSignIn({ isOpen, onClose }) {
 
    const {
        isOpen: isOpenSignInModal,
        onOpen: onOpenSignInModal,
        onClose: onCloseSignInModal
    } = useDisclosure({ defaultIsOpen: true })

    const [error, SetError] = React.useState()

    const { register, handleSubmit, formState: { isSubmitting, isDirty, isValid }} =  useForm({
        mode: "onChange"
      });

    const router = useRouter()


    const onFormSubmit = async (data, event) => {
        event.preventDefault();
        const { email, password } = data

        const result = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        })
        console.log(result)

        if (!result.error) {
            router.push('/');
        }
        if (result.error) {
            SetError(result.error)
        }
    }

    
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}  px={{base:'2rem',md:'auto'}}>
    <ModalOverlay bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px' />
    <ModalContent px={6} bgColor={'white'}>
        <ModalHeader color='black'><Heading fontSize={'xl'}>Sign In</Heading></ModalHeader>
        <ModalHeader color='black'><Heading fontSize={'2xl'}>Log In with email</Heading></ModalHeader>
        <ModalCloseButton color='black' />
        <form style={{ width: '100%', display: "flex",  flexDirection:'column' }} onSubmit={handleSubmit(onFormSubmit)}>
        <ModalBody color='black'>


                {addressParams.map((param) => {
                    return <Stack mx={2} w={{ base: "100%", md: "100%" }} key={param.name} py={2} flexGrow={1}> <FormInput  key={param.name}  param={param} register={register} />
                    </Stack>
                })}

    
          

        </ModalBody>
        <ModalFooter flexDirection={'column'}>
        <Flex py={4}>
            {error ? <Heading color='green.500'>{error}!</Heading> : '' }
            </Flex>

            <Flex w='full' px={4}>

            <Button w='full' rounded={'full'} bgColor={'black'} color='white' _hover={{background:'black'}} disabled={!isDirty || !isValid} type='submit'>Submit</Button>

            </Flex>

                
      
        </ModalFooter>
        </form>
    </ModalContent>
</Modal>
  )
}

export default CredentialsSignIn