import { Stack, VStack } from '@chakra-ui/react'
import {React,useMemo} from 'react'
import TweetField from './TweetField'
import { FiTrendingUp } from 'react-icons/fi'
import Input from './Input'

function Feed({ posts, children,page }) {


  const tweets = useMemo(() => {
    if (!posts) return []


    return posts.map((post) => (
      <TweetField key={post.id} id={post.id} post={post} />
    ))
  }, [posts])
  return (
    <>
      <div className="border-l w-full  border-r border-gray-700">
        <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-gray-900 border-b border-gray-700">
          <h2 className="text-lg sm:text-xl font-bold">{page}</h2>
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
            <FiTrendingUp className="h-5 text-white" />
          </div>
        </div>

        {children}

        <div className="pb-72 flex justify-center items-center flex-wrap">
          {tweets}
        </div>

      </div>

    </>
  )
}

export default Feed