import Head from 'next/head'
import Image from 'next/image'
import prisma from '../lib/prisma'
import Navbar from 'components/Navbar'
import { Center, Heading, HStack, Spacer, Stack, VStack,Box, Flex } from '@chakra-ui/react'
import Cards from 'components/Cards'
import InputField from 'components/InputField'
import { useState } from 'react'
import SimpleSidebar from 'components/Sidebar'
import Feed from 'components/Timeline/Feed'

export default function Home({ cars }) {



  console.log(cars)
  return (
    <div className=''>

      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



        <Stack direction={'row'} justifyContent={{base:'flex-start',md:'center'}} alignContent={{base:'flex-start',md:'center'}} minH={'100vh'} maxW='2000px'>
          
          <Flex display={{base:'none',md:'flex'}} h='100vh' position={'sticky'} top={0}>
              <Box  h='full' >
              <SimpleSidebar/>

              </Box>

          </Flex>
          
          <Flex  w={{base:'100%',md:'50%'}} h='full'>
          <Box>
              <Feed posts={cars}/>
            </Box>

          </Flex>


         

        <Flex display={{base:'none',md:'flex'}} w="25%" bgColor={'gray.300'} h="full">
        <Box>
              text
            </Box>
        </Flex>
 

        </Stack>












    </div>
  )
}



export async function getServerSideProps() {

  let cars = await prisma.Car.findMany()
  cars = JSON.parse(JSON.stringify(cars))

  return {
    props: { cars }
  }
}