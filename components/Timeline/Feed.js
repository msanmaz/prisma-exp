import { Stack, VStack } from '@chakra-ui/react'
import {React,useMemo} from 'react'
import TweetField from './TweetField'
import { FiTrendingUp } from 'react-icons/fi'
import Input from './Input'
import Posts from './Posts'

function Feed({ posts, setTweets,page,session,children }) {
  console.log('feed',posts)

  const tweets = useMemo(() => {
    if (!posts) return null


    return posts.map((post) => (
      <Posts key={post.id} id={post.id} post={post} />
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


          {tweets}

      </div>

    </>
  )
}

export default Feed