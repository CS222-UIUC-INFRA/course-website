'use client'

import {
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'


const Links = [
  { name: 'Description', href: '/description' },
  { name: 'Syllabus', href: '/syllabus' },
  { name: 'Course Resources', href: '/course-resources' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Grading', href: '/grading' },
  { name: 'Policy', href: '/policy' },
  { name: 'Hall of Fame', href: '/hall-of-fame' },
]
const NavLink = ({ linkClass, link, handleSelection }) => {

  return (
    <Flex
      align="center"
      p="2"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: '#D9D4CD',
        color: 'white',
      }}
      onClick={() => handleSelection(link.name)}
    >
      <Link
        className={linkClass}
        href={link.href}>
        {link.name}
      </Link>
    </Flex>

  )
}

export default function NavBar() {

  const [currentSelection, setCurrentSelection] = useState('');
  const handleSelection = (selectedItem) => {
    setCurrentSelection(selectedItem);
  };

  return (
    <>
      <Box bg={'#BAAEA7'} px={4} className='navbar hidden sm:block'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'black'}><span style={{ fontSize: '30px' }}><b>CS222</b></span></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} linkClass = {currentSelection === link.name ? 'link-selected' : 'link' } link={link} handleSelection={handleSelection} />
              ))}
            </HStack>
          </HStack>
          <HStack>
            {/* add link to course campuswire */}
            <Link href='https://campuswire.com/p/G1FDC5140'>
              Campuswire
            </Link>
            {/* add link to course canvas page */}
            <Link href='https://canvas.illinois.edu/'>
              Canvas
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}