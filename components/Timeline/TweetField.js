import { HStack, Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from 'react'
import timeago from 'lib/timeago'
import {
  HeartIcon as HeartIconFilled,
  ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'

function TweetField({ post }) {
  const nolink = false
  return (
    <>
      <Flex w='full' my={4} px={4} h={'9rem'} bgColor='gray.700'>
        <HStack w='full'>
          <Box w='10%'>
            <Image className='rounded-full' width={50} height={50} src={post.author.image}/>
          </Box>
          <Box w='100%'>
            {post.content}<br/>
            <Link href={`/${post.author.name}`}>
            {post.author.name}
              </Link>

            <span className='pl-1 text-sm font-light leading-5 color-dimmed'>

              <span suppressHydrationWarning>{timeago.format(new Date(post.createdAt))}</span>

            </span>
          </Box>
        </HStack>
      </Flex>
    </>
  )
}

export default TweetField