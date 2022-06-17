import TweetField from 'components/Timeline/TweetField'
import { getReplies, getTweet } from '../../../lib/data.js'
import prisma from '../../../lib/prisma'
import {Button} from '@chakra-ui/react'
import { useRouter } from 'next/router.js'
import NewReply from 'components/NewReply.js'
import { useSession } from 'next-auth/react'
import Feed from 'components/Timeline/Feed.js'

export default function SingleTweet({ tweet,replies }) {

  const router = useRouter()
  const { data: session, status } = useSession()

  
  return (
    <>
        <TweetField post={tweet}/>
        {session && session.user.email === tweet.author.email && (
   <div className='flex-1 py-2 m-2 text-center'>
   <Button
     onClick={async () => {
       const res = await fetch('/api/tweet', {
         body: JSON.stringify({
           id: tweet.id,
         }),
         headers: {
           'Content-Type': 'application/json',
         },
         method: 'DELETE',
       })

       if (res.status === 401) {
         alert('Unauthorized')
       }
       if (res.status === 200) {
         router.push('/')
       }
     }}
   >
     delete
   </Button>
 </div>

        )}
     
        <NewReply tweet={tweet}/>
        <Feed posts={replies} page={'Replies'} session={session}/>
    </>

  )
}

export async function getServerSideProps({ params }) {
	let tweet = await getTweet(params.id, prisma)
  tweet = JSON.parse(JSON.stringify(tweet))
  let reply = await getReplies(params.id,prisma)
  const replies = JSON.parse(JSON.stringify(reply))

  return {
    props: {
      tweet,
      replies
    },
  }
}