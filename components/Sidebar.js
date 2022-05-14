import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
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
    <div className=" items-center fixed h-full">
      <SidebarContent/>
      
    </div>
  );
}



const SidebarContent = ({  ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: '18%', md:'17.5%', xl:'18%', '2xl':'340px' }}
      pos="fixed"
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
        Tweet
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
        <Box display={{base:'none',md:'block'}}>
        {children}
        </Box>

      </Flex>
    </Link>
  );
};

