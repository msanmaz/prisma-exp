import React from 'react'
import {VStack, Stack,Flex, Modal, ModalOverlay, ModalBody, Heading, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Button } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useRouter } from 'next/router';
import FormInput from 'components/Forminput';


const addressParams = [
    { name: "email", type: 'email', alias: 'Email', style: '100%',inputEl:false, pattern: /^\S+@\S+$/i, length: 80 },
    { name: "password", type: 'password', alias: 'Password', style: '100%',inputEl:false },
    { name: "confirmpass", type: 'password', alias: 'Confirm Pass', style: '100%',inputEl:true },
]




function CredentialsSignUp({ isOpen, onClose }) {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    console.log(show)

    const [action, setAction] = React.useState()

    const { register, handleSubmit, reset,  formState: { isSubmitting, isDirty, isValid } } = useForm({
        mode: "onChange"
      });

    const router = useRouter()

    const onFormSubmit = async (data, e) => {
        e.preventDefault();
        const email = data.email;
        const username = data.username;
        const password = data.password;

        //Validation
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }
        //POST form values
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        //Await for data for any desirable next steps
        const resp = await res.json();
        if (resp.message !== null) {
            setAction(resp.message)
            reset()
        }


        await router.push('/signin')

    };



    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px' />
                <ModalContent px={6} bgColor={'white'}>
                    <ModalHeader color='black'><Heading fontSize={'xl'}>Sign Up Form</Heading></ModalHeader>
                    <ModalHeader color='black'><Heading fontSize={'2xl'}>Create your account</Heading></ModalHeader>
                    <ModalCloseButton color='black' />
                    <form style={{ width: '100%', display: "flex",  flexDirection:'column' }} onSubmit={handleSubmit(onFormSubmit)}>
                    <ModalBody color='black'>


                            {addressParams.map((param) => {
                                return <Stack mx={2} w={{ base: "100%", md: "100%" }} key={param.name} py={2} flexGrow={1}> <FormInput handleClick={handleClick} key={param.name} show={show} param={param} register={register} />
                                </Stack>
                            })}

                
                      

                    </ModalBody>
                    <ModalFooter flexDirection={'column'}>
                    <Flex py={4}>
                        {action ? <Heading color='green.500'>{action}!</Heading> : '' }
                        </Flex>

                        <Flex w='full' px={4}>

                        <Button w='full' rounded={'full'} bgColor={'black'} color='white' _hover={{background:'black'}} disabled={!isDirty || !isValid} type='submit'>Submit</Button>

                        </Flex>
          
                            
                  
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>

    )
}

export default CredentialsSignUp