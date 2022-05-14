import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import TweetField from './TweetField'
import {FiTrendingUp} from 'react-icons/fi'
import Input from './Input'

function Feed({posts}) {
  return (
    <>
    <div className="flex-grow border-l  sm:pl-0 border-r border-gray-700 max-w-[45rem]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-gray-900 border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <FiTrendingUp className="h-5 text-white" />
        </div>
      </div>

        <VStack>
        <Input />

        <div className="pb-72 flex w-full justify-center items-center flex-wrap">
        {posts.map((post) => (
          <TweetField key={post.id} id={post.id} post={post} />
        ))}
      </div>
        </VStack>

    </div>
    
    </>
  )
}

export default Feed