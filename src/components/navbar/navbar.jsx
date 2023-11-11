'use client'

import {
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react'
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
const NavLink = (props) => {
  const { children } = props

  return (
    <Link
      className="link"
      href={children.href}>
      {children.name}
    </Link>
  )
}

export default function NavBar() {

  return (
    <>
      <Box bg={'#BAAEA7'} px={4} className='hidden sm:block'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'black'}><span style={{ fontSize: '30px' }}><b>CS222</b></span></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack>
            {/* add link to course campuswire */}
            <Link href='https://chakra-ui.com'>
              Campuswire
            </Link>
            {/* add link to course canvas page */}
            <Link href='https://chakra-ui.com'>
              Canvas
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}