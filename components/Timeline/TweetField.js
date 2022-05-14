import { HStack,Flex,Box,Image } from '@chakra-ui/react'
import React from 'react'

function TweetField({post}) {
 return (
    <>
    <Flex w='full' my={4} px={4} h={'9rem'} bgColor='gray.700'>
        <HStack>
        <Box  w='full'>
        <Image rounded={'9999px'}  w={'2.75rem'} h={'2.75rem'}  src='/blank-profile-picture.webp' />
        </Box>
        <Box>
    {post.post}
        </Box>
        </HStack>
    </Flex>
    </>
  )
}

export default TweetField