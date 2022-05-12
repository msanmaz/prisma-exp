import { React, useState } from 'react'
import { Input, FormControl, FormLabel, FormHelperText, VStack, Button, Flex, Stack } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import {useRouter} from 'next/router'

function InputField() {
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [radio, setRadio] = useState()
  const [loading,setLoading] = useState()
  
  const Router = useRouter()

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { brand, model };
      await fetch('/api/hello', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      setLoading(true)
      await Router.push('')
    } catch (error) {
      console.error(error);
    }
    setBrand('')
    setModel('')
    setLoading(false)
  };
  return (

    <VStack px={2} w='full'>
      <form className='w-[50%]' onSubmit={submitData}>
        <FormControl>
          <FormLabel htmlFor='car'>Car Brand</FormLabel>
          <Input onChange={(e) => setBrand(e.target.value)} id='brand' type='text' value={brand} />
          <FormHelperText>For your future reference</FormHelperText>
          <FormLabel htmlFor='car'>Car Model</FormLabel>
          <Input onChange={(e) => setModel(e.target.value)} id='model' value={model} type='text' />
          <FormHelperText>Which model you fancy?</FormHelperText>
          <RadioGroup py={4} onChange={setRadio} value={radio}>
            <Stack direction='row'>
              <Radio value='true'>Bought</Radio>
              <Radio value='false'>Will Buy</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Stack py={4} w='20%'>
          <Button disabled={!brand || !model}  type='submit' bgColor={'green.400'} _hover={{ bgColor: 'green.600' }}>
          {loading ? (
                      <Spinner size={"md"} />
                    ) : 'Add'}
          </Button>
        </Stack>

      </form>

    </VStack>

  )
}

export default InputField