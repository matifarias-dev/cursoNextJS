import type { ProductType } from '../../../types'
import { env } from '../../config/env'
import { shopifyUrls } from './urls'

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(shopifyUrls.products.all, {
      headers: {
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY || ''
      }
    })
    const { products } = await response.json()
    // throw new Error()
    return products
  } catch (err) {
    console.error(err)
    throw new Error('Error trying to fetch products')
  }
}
