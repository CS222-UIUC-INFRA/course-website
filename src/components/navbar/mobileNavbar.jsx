'use client'

import React from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,

} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import Link from 'next/link'


const Links = [
  { name: 'Description', href: '/description' },
  { name: 'Syllabus', href: '/syllabus' },
  { name: 'Course Resources', href: '/course-resources' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Grading', href: '/grading' },
  { name: 'Policy', href: '/policy' },
  { name: 'Hall of Fame', href: '/hall-of-fame' },
]

export default function MobileNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} className='sm:hidden'>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      minH="100vh"
      minW="100vh"
      bg={'#D9D9D9'}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      pos="fixed"
      {...rest}>
      <Flex
        alignItems="center"
        bg={'#D6D9B4'}
        borderBottomWidth="1px"
        width={'800px'}
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Flex bg={'#D6D9B4'} h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Flex w='300px'>
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              CS222
            </Text>
          </Flex>
          <CloseButton onClick={onClose} />
        </Flex>
      </Flex>
      {Links.map((link) => (
        <NavLink key={link.name} onClick={onClose} onOverlayClick={onClose} href={link.href} name={link.name}>{link}</NavLink>
      ))}
    </Box>
  )
}

const NavLink = ({ href, name, onClick }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
    >
      <Link
        className="link"
        href={href} onClick={onClick}>
        {name}
      </Link>
    </Flex>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={'#D6D9B4'}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        CS222
      </Text>
    </Flex>
  )
}