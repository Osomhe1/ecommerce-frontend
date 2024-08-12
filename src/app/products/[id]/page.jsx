'use client'

import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/react'
import { products } from '@/app/api/data'
import { useCart } from '@/context/CartContext'
import { useParams } from 'next/navigation'

const ProductDetails = () => {
  const param = useParams()
  const { addToCart, cart } = useCart()

  const id = param.id

  if (!id) {
    return <Text>Invalid Product ID.</Text>
  }

  const product = products.find((product) => product.id === parseInt(id))

  if (!product) return <Text>Product not found.</Text>

  const cartItem = cart.find((item) => item.id === product.id)
  const quantity = cartItem ? cartItem?.quantity : 0
  const totalAmount = (product.price * quantity).toFixed(2)

  return (
    <>
      <Box p={8} maxW='1200px' mx='auto'>
        <Image src={product?.image} alt={product?.name} boxSize='300px' />
        <Heading mt={4}>{product?.name}</Heading>

        <Text mt={2}>
          {product?.price !== null ? `$${product?.price}` : 'Loading...'}
        </Text>
        {quantity > 0 && (
          <Text mt={2}>
            Total: ${totalAmount} (x{quantity})
          </Text>
        )}
        <Text mt={2}>
          {product?.description !== null
            ? `${product?.description}`
            : 'Loading...'}
        </Text>
        {quantity > 0 ? (
          <Flex alignItems='center' mt={4}>
            <Button
              colorScheme='teal'
              onClick={() => removeFromCart(product?.id)}
              mr={2}
            >
              -
            </Button>
            <Text>{quantity}</Text>
            <Button
              colorScheme='teal'
              onClick={() => addToCart(product)}
              ml={2}
            >
              +
            </Button>
          </Flex>
        ) : (
          <Button colorScheme='teal' mt={4} onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        )}

        <Box mt={8}>
          <Heading size='md'>User Reviews</Heading>
          <List mt={4}>
            {product?.reviews?.map((review) => (
              <ListItem key={review?.id}>
                <Text fontWeight='bold'>Rating: {review?.rating}</Text>
                <Text>{review?.content}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  )
}

export default ProductDetails
