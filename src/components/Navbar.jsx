'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  Collapse,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    setIsAuthenticated(!!storedUser)
  }, [])

  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <Box bg='gray.800' px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <IconButton
          size='md'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label='Open Menu'
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems='center'>
          <Box color='white'>E-Commerce</Box>
          <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link href='/' prefetch={false} className='text-white'>
              Home
            </Link>
            <Link href='/products' prefetch={false} className='text-white'>
              Products
            </Link>
            <Link href='/cart' prefetch={false} className='text-white'>
              Cart
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems='center'>
          {isAuthenticated ? (
            <Button
              onClick={handleLogout}
              variant='solid'
              colorScheme='teal'
              size='sm'
              mr={4}
            >
              Logout
            </Button>
          ) : (
            <Flex alignItems='center' gap={4}>
              <Button variant='solid' colorScheme='teal' size='sm' mr={4}>
                <Link href='/login'>Login</Link>
              </Button>
              <Button variant='solid' colorScheme='teal' size='sm' mr={4}>
                <Link href='/signup'>Sign Up</Link>
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>

      {/* Mobile Sidebar */}
      <Collapse in={isOpen}>
        <VStack
          display={{ base: 'grid', md: 'none' }}
          position='absolute'
          top={16}
          left={0}
          right={0}
          gap={4}
          bg='gray.700'
          p={4}
          spacing={4}
          className='z-20'
        >
          <Link
            href='/'
            prefetch={false}
            className='text-white'
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href='/products'
            prefetch={false}
            className='text-white'
            onClick={onClose}
          >
            Products
          </Link>
          <Link
            href='/cart'
            prefetch={false}
            className='text-white'
            onClick={onClose}
          >
            Cart
          </Link>
        </VStack>
      </Collapse>
    </Box>
  )
}

export default Navbar
