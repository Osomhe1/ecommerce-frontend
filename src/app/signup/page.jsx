'use client'

import { useState } from 'react'
import { Box, Input, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Signup = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify(user)) // Save user to localStorage
    alert('Signup successful!')
  }

  return (
    <>
      <Box p={8} maxW='md' mx='auto'>
        <Heading>Signup</Heading>
        <Input
          placeholder='Email'
          mt={4}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          placeholder='Password'
          type='password'
          mt={4}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button colorScheme='teal' mt={4} onClick={handleSignup}>
          Signup
        </Button>
        <Text mt={4}>
          Already have an account?{' '}
          <Link href='/login' prefetch={false}>
            Login
          </Link>
        </Text>
      </Box>
    </>
  )
}

export default Signup
