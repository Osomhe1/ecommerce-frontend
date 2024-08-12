'use client'

import { Box, Image, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <Box p={5} cursor='pointer' shadow='md' borderWidth='1px'>
      <Image src={product?.image} alt={product?.name} w={'100%'} />
      <Text mt={4} fontWeight='bold'>
        {product?.name}
      </Text>
      <Text mt={2}>${product?.price}</Text>
      <Link href={`/products/${product?.id}`} passHref>
        <Button colorScheme='teal' mt={4}>
          View Details
        </Button>
      </Link>
    </Box>
  )
}

export default ProductCard
