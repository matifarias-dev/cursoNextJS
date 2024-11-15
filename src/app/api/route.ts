import { getProducts } from 'app/services/shopify/products'

export async function GET() {
  const response = await getProducts()
  return response
}
