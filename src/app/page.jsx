// pages/index.js
'use client'

import { Box, Heading, Text, Button, Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Box p={8} textAlign='center'>
        <Heading>Welcome to Our E-Commerce Platform</Heading>
        <Text mt={4}>Find the best products at affordable prices!</Text>
        <Link href='/products' passHref>
          <Button colorScheme='teal' mt={8}>
            Shop Now
          </Button>
        </Link>
      </Box>
    </>
  )
}
