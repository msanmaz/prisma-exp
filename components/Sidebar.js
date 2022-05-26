import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  Button,
  VStack,
} from '@chakra-ui/react';
import {
  FiHome,
  FiUser,
  FiCompass,
  FiMoreHorizontal,
  FiHash,
  FiMessageSquare,
  FiBell,
  FiList
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import {signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import Link from 'next/link'




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
      <SidebarContent/>
      
    </>
  );
}



const SidebarContent = ({  ...rest }) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w='full'
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
       
       
        <Flex h='10' w='10' _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}  rounded={'3xl'}>
          <Image mt='8px' ml='7px'  src='https://rb.gy/ogau5a' w={6} h={6}/>
        </Flex>

      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Box px={6} my={4}>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-[10rem] h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
{session ? (
      <button
      onClick={() => {
        signOut()
        router.push('/')
      }}
    >
    {session.user.email}{' '}

      logout
    </button>

):    <Link href='/api/auth/signin'>
login
</Link> }
      </button>
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
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        overflow={'hidden'}
        _hover={{
          bg: 'cyan.400',
          color: 'white',
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
        <Box display={{base:'none',md:'block'}}     >
        {children}
        </Box>

      </Flex>
    </Link>
  );
};

