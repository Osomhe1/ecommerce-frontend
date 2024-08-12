// pages/api/data.js

export const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `Description of Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  image: `https://via.placeholder.com/250?text=Product+${i + 1}`,
  reviews: [
    { id: 1, content: 'Great product!', rating: 5 },
    { id: 2, content: 'Satisfied', rating: 4 },
  ],
  stock: Math.floor(Math.random() * 20),
}))

export default function handler(req, res) {
  console.log(res.statusCode, 'Status Code')
  console.log(res.headers, 'Headers')
  console.log(req.body, 'Body')
  res.status(200).json(products)
}
