'use client'

import { Box, SimpleGrid, Input } from '@chakra-ui/react'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '../api/data'

const Products = () => {
  const [search, setSearch] = useState('')

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Box p={8} maxW='1200px' mx='auto'>
        <Input
          placeholder='Search products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          mb={8}
        />
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {filteredProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Products
