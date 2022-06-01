import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    useColorModeValue
} from '@chakra-ui/react'

function FormInput({ param, register }) {
    return (
        <>
            <FormControl py={2} >
                <FormLabel htmlFor='first-name'>{param.alias}</FormLabel>
                <Input id={param.name} value={param.value} type={param.type}   bg={useColorModeValue('gray.100', 'gray.700')}
                    _placeholder={{
                        color: 'gray.400',
                    }} placeholder={param.alias} {...register(param.name,{
                        maxLength:param.length,
                        pattern:param.pattern
                    })} />
            </FormControl>

        </>
    )
}

export default FormInput