import React from 'react'
import { Stack, Box, Text, Flex, Heading, IconButton } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

function Cards({ cars }) {
  return (
    <>
      <Flex flexDirection={'row'} justifyContent={'center'} alignContent="center" w='full' px={10} flexWrap='wrap'>
        {cars.map((car) => {
          return <Box rounded={'lg'} mx={4} my={4} w='25%' h='13rem' bgColor={'gray.700'}>
            <Heading px={4} py={2}>{car.brand}</Heading>
            <Text px={4} py={2} fontSize={'xl'}>{car.model}</Text>
            <Text px={4} fontSize={'lg'}>{car.created_at}</Text>

            <Box display='flex' py={5}  justifyContent={'center'} alignItems='center'>
            <IconButton colorScheme={'red'} icon={<SmallCloseIcon/>}/>

            </Box>
          </Box>
        })}

      </Flex>


    </>
  )
}

export default Cards