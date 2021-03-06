import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Button,
  Text,
} from '@chakra-ui/react';
import {
  FiHome,
  FiUser,
  FiCompass,
  FiMoreHorizontal,
  FiHash,
  FiMessageSquare,
  FiBell,
  FiList,
} from 'react-icons/fi';
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { LibraryIcon } from '@heroicons/react/outline';
import Image from 'next/image'



const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Explore', icon: FiHash },
  { name: 'Notifications', icon: FiBell },
  { name: 'Messages', icon: FiMessageSquare },
  { name: 'Bookmarks', icon: FiCompass },
  { name: 'Lists', icon: FiList },
  { name: 'Profile', icon: FiUser },
  { name: 'Settings', icon: FiMoreHorizontal },

];

export default function SimpleSidebar() {


  return (
    <>
      <SidebarContent />

    </>
  );
}



const SidebarContent = ({ ...rest }) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log(session.user.image)
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{md:'5rem',xl:'200px'}}
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">


        <Flex h='10' w='10' _hover={{
          bg: 'cyan.400',
          color: 'white',
        }} rounded={'3xl'} px={1}>
          <Image className='px-2' src='https://rb.gy/ogau5a' width={28} height={28} />
        </Flex>

      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}



      <Box px={6} my={4}>


        <Box display={{md:'none',xl:'flex'}} bgColor={'twitter.600'} rounded='full'>
       
            <Button w='full' rounded={'full'} bgColor='twitter.600'>
              Tweet
            </Button>

        </Box>

        <Box position={'absolute'} bottom={'5%'}  rounded='full'>
          {status === 'authenticated'
           ?             <Flex onClick={() => signOut()}
           align="center"
         
           p="2"
           borderRadius="lg"
           rounded='full'
           role="group"
           cursor="pointer"
           overflow={'hidden'}
   
           _hover={{
             bg: "rgb(245,245,245,.1)",
   
           }}
          >
             <Image src={session.user.image} className='rounded-full' width={50} height={50} rounded='full'/>

           <Box display={{ base: 'none', md: 'inline' }} px={2}  >
             <Box>
               <p className='font-bold text-sm'>{session.user.name}</p>
             </Box>
            
   
           </Box>
   
         </Flex>
         
           : 
           <Link href='/api/auth/signin'>
                  <Button>
             Login
           </Button>
           </Link>
    

} 

        </Box>

        
      </Box>


    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx={{md:3,xl:4}}
        borderRadius="lg"
        rounded='full'
        role="group"
        cursor="pointer"
        overflow={'hidden'}

        _hover={{
          bg: "rgb(245,245,245,.1)",

        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="25"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Box display={{ base: 'none', md: 'block' }}     >
          {children}
        </Box>

      </Flex>
    </Link>
  );
};

