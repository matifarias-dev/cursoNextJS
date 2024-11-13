import { getProducts } from 'app/services/shopify'

export async function GET() {
  const response = await getProducts()
  return response
}
