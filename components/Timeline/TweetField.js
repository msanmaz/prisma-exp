import { HStack,Flex,Box,Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import timeago from 'lib/timeago'

function TweetField({post}) {
  const nolink = false
 return (
    <>
    <Flex w='full' my={4} px={4} h={'9rem'} bgColor='gray.700'>
        <HStack w='full'>
        <Box  w='10%'>
        <Image rounded={'9999px'}  w={'2.75rem'} h={'2.75rem'}  src='/blank-profile-picture.webp' />
        </Box>
        <Box w='100%'>
    {post.content}
    <span className='pl-1 text-sm font-light leading-5 color-dimmed'>
            
                    <span>{timeago.format(new Date(post.createdAt))}</span>
                  
                </span>
        </Box>
        </HStack>
    </Flex>
    </>
  )
}

export default TweetField