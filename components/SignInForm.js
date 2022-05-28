import React from 'react';
import FormInput from './Forminput';
import { VStack, Stack, FormControl, FormErrorMessage, Button, Flex } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';





const SignupForm = ({ addressParams }) => {
    const [error, SetError] = React.useState()
    const { register, handleSubmit, formState: { errors } } = useForm();

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
            router.replace('/');
        }
        if (result.error) {
            SetError(result.error)
        }
    }


    return (
        <VStack w="full">

            <form style={{ width: '100%', display: "flex", flexWrap: "wrap" }} onSubmit={handleSubmit(onFormSubmit)}>

                {addressParams.map((param) => {
                    return <Stack mx={2} w={{ base: "100%", md: "100%" }} key={param.name} py={2} flexGrow={1}> <FormInput key={param.name} param={param} register={register} />
                    </Stack>
                })}

                <Flex w="100%" py={4} justify="flex-end">
                    <Button mx={2} size={'sm'} bgColor={'green.600'} type="submit">Next</Button>

                </Flex>
            </form>








        </VStack>
    )
}

export default SignupForm
