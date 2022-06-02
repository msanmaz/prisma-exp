import React from 'react'
import { Box, HStack, Icon } from '@chakra-ui/react'
import {
    FiHome,
    FiHash,
    FiMessageSquare,
    FiBell,
} from 'react-icons/fi';


const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Explore', icon: FiHash },
    { name: 'Notifications', icon: FiBell },
    { name: 'Messages', icon: FiMessageSquare },

];

const BottomNav = () => {
    return (
        <Box  display={'flex'} w='full' h='3rem' bgColor='gray.500'>
            {LinkItems.map((link) => (
                <HStack display={'flex'} alignItems={'center'} justifyContent='center' key={link.name} w='25%'>
                
                    <Icon
                        mr="4"
                        fontSize="25"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={link.icon}
                    />


                </HStack>
            ))}

        </Box>
    )
}

export default BottomNav