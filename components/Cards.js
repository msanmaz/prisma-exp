import React from 'react'
import {Stack,Box,Text,Flex} from '@chakra-ui/react'

function Cards({cars}) {
  return (
     <Stack w='full' display={'flex'}>
    <Box>
    {cars.map((car)=> {
      return <Flex rounded={'lg'} key={car.id} my={8} color={'white'} flexDirection={'column'} mx={2} px={4} h='7rem' bgColor={'gray.700'}>
        <Box py={1}><Text >{car.brand}</Text></Box>
        <Box py={1}><Text >{car.model}</Text></Box>
        <Box py={1}><Text >{car.created_at}</Text></Box>
      </Flex>
    })}

    </Box>
  </Stack>
  )
}

export default Cards