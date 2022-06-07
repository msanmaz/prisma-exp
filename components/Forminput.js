import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    useColorModeValue,
    InputRightElement,
    InputGroup,
    Button
} from '@chakra-ui/react'

function FormInput({ param, register, show,handleClick }) {
    return (
        <>
            <FormControl py={2} >
                <InputGroup>
                    <Input id={param.name} variant='outline' h='4rem' type={show ? 'text' : param.type} focusBorderColor='blue.400' border={'2px'} borderColor='gray.300' value={param.value}  bg={useColorModeValue('white', 'white')}
                        _placeholder={{
                            color: 'gray.400',
                        }}
                        _hover={{
                            borderColor:'gray.400'
                        }} 
                        placeholder={param.alias} {...register(param.name, {
                            maxLength: param.length,
                            pattern: param.pattern
                        })} />
              {param.inputEl ?  <InputRightElement my={3} width='4.5rem'>
                        <Button h='2.5rem' size='sm'onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>   :'' }      

                </InputGroup>

            </FormControl>

        </>
    )
}

export default FormInput