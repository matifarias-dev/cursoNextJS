import { env } from "app/config/env"
import { Product } from "app/components/home/MainProducts/interface"


export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: {
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY || ''
        }
      }
    )
    const { products } = await response.json()
    // throw new Error()
    return products
  } catch (err) {
    console.error(err)
    throw new Error('Error trying to fetch products')
  }
}