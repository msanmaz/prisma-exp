import React from 'react';
import FormInput from './Forminput';
import { VStack, Stack,FormControl,FormErrorMessage,Button,Flex } from '@chakra-ui/react'
import { useForm } from "react-hook-form";



const SignupForm = ({addressParams}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

      const onFormSubmit = async (data,e) => {
        e.preventDefault();
        const email = data.email;
        const username = data.username;
        const password = data.password;
        console.log(username)
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
                username:username,
                email: email,
                password: password,
            }),
        });
        //Await for data for any desirable next steps
        const resp = await res.json();
        console.log(resp);
    };
    

  return (
    <VStack w="full">

          <form style={{width:'100%', display:"flex",flexWrap:"wrap"}} onSubmit={handleSubmit(onFormSubmit)}>

            {addressParams.map((param) => {
              return <Stack mx={2} w={{base:"100%",md:"100%"}} key={param.name} py={2} flexGrow={1}> <FormInput key={param.name} param={param} register={register} />
               </Stack>
            })}
             
          <Flex w="100%" py={4}  justify="flex-end">
          <Button mx={2} size={'sm'}  bgColor={'green.600'} type="submit">Next</Button>

          </Flex>
          </form>








    </VStack>
  )
}

export default SignupForm
