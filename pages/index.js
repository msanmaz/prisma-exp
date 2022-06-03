import Head from 'next/head'
import { Stack, Box, Flex, Heading } from '@chakra-ui/react'
import SimpleSidebar from 'components/Sidebar'
import Feed from 'components/Timeline/Feed'
import { useSession,getSession } from 'next-auth/react'
import Input from 'components/Timeline/Input'
import prisma from 'lib/prisma'
import { getTweets } from 'lib/data.js'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BottomNav from 'components/BottomNav'


export default function Home({ tweets,session }) {
  const { status } = useSession()

    const router = useRouter()

    useEffect(() => {
      if (session && !session.user.name) {
        router.push('/setup')
      }
    }, [session])

    


  if (status === 'loading') {
    return <p>...</p>
  }

  return (
    <div className=''>

      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



        <Box display={'flex'} direction={'row'} justifyContent={{base:'flex-start',md:'center'}} alignContent={{base:'flex-start',md:'center'}} minH={'100vh'} maxW='2000px'>
          
          <Flex display={{base:'none',md:'flex',xl:'flex'}}  w={{md:'5rem',xl:'200px'}} h='100vh' position={'sticky'} top={0}>
              <Box  h='full' >
              <SimpleSidebar/>

              </Box>

          </Flex>
          
          <Flex  w={{base:'100%',md:'50%'}} h='full'>
          <Box w='full'>
           <Feed posts={tweets}>

             {session ? <Input session={session}/> : <Heading px={3}>You&apos;re not logged in</Heading> }


             </Feed>       
            </Box>

          </Flex>


         

        <Flex display={{base:'none',md:'flex'}} w="25%" bgColor={'gray.300'} h="full">
        <Box>
              text
            </Box>
        </Flex>


    
 
 

        </Box>






        <Flex position={'fixed'} bottom='0' display={{base:'inline',md:'none'}} w="full" bgColor={'gray.300'} h="auto">
        <BottomNav/>
        </Flex>





    </div>
  )
}

export async function getServerSideProps(context) {

  const session = await getSession(context);

	let tweets = await getTweets(prisma)
  tweets = JSON.parse(JSON.stringify(tweets))


  return {
    props: {session,tweets }
  };
}

