'use client'

import { useCart } from '@/context/CartContext'
import { Box, Button, Text, SimpleGrid, Image, Heading } from '@chakra-ui/react'

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart()

  const totalAmount = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  const handleCheckout = () => {
    alert('Order processed successfully!')
    // In a real app, here you would send the cart data to the backend
    clearCart ()
  }

  return (
    <>
      <Box p={8} maxW='1200px' mx='auto'>
        <Heading>Your Cart</Heading>
        {cart?.length === 0 ? (
          <Text className='text-center text-2xl'>Empty Cart</Text>
        ) : (
          <>
            <SimpleGrid columns={[1, 2, 3]} spacing={8} mt={8}>
              {cart?.map((product) => (
                <Box key={product.id} p={5} shadow='md' borderWidth='1px'>
                  <Image src={product.image} alt={product.name} w={'100%'} />
                  <Text mt={4} fontWeight='bold'>
                    {product.name}
                  </Text>
                  <Text mt={2}>
                    ${product.price} x {product.quantity}
                  </Text>
                  <Text mt={2}>
                    Subtotal: ${(product.price * product.quantity).toFixed(2)}
                  </Text>

                  <Button
                    colorScheme='red'
                    mt={4}
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
            <Box mt={8}>
              <Text fontSize='xl' fontWeight='bold'>
                Total Amount: ${totalAmount.toFixed(2)}
              </Text>
            </Box>
            <Button colorScheme='teal' mt={8} onClick={handleCheckout}>
              Checkout
            </Button>
          </>
        )}
      </Box>
    </>
  )
}

export default Cart
