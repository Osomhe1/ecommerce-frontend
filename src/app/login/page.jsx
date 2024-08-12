/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { Box, Input, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const router = useRouter()

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (
      storedUser &&
      storedUser?.email === user.email &&
      storedUser.password === user.password
    ) {
      alert('Login successful!')
      router.push('/products')
    } else {
      alert('Invalid credentials!')
    }
  }

  return (
    <>
      <Box p={8} maxW='md' mx='auto'>
        <Heading>Login</Heading>
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
        <Button colorScheme='teal' mt={4} onClick={handleLogin}>
          Login
        </Button>
        <Text mt={4}>
          Don't have an account?{' '}
          <Link href='/signup' prefetch={false}>
            Signup
          </Link>
        </Text>
      </Box>
    </>
  )
}

export default Login
