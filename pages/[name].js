import prisma from 'lib/prisma'
import { getUserTweets } from 'lib/data.js'

import Feed from 'components/Timeline/Feed'

export default function UserProfile({ name, tweets }) {
  return (
    <>
      <p className='text-center p-5'>User profile of {name}</p>
      <Feed posts={tweets} page={name} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  let tweets = await getUserTweets(params.name, prisma)
  tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      name: params.name,
      tweets,
    },
  }
}