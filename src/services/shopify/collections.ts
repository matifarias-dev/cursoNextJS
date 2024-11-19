import type { CollectionType } from '../../../types'
import { env } from '../../config/env'
import { shopifyHeader, shopifyUrls } from './urls'

export const getCollections = async (): Promise<CollectionType[]> => {
  try {
    console.log('URL SHOPPIFY:', env.SHOPIFY_HOSTNAME)
    const response = await fetch(shopifyUrls.collections.all, shopifyHeader)
    const { smart_collections } = await response.json()
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle
      }
    })
    return transformedCollections
  } catch (err) {
    console.error(err)
    throw new Error('Error trying to fetch collections')
  }
}

export const getCollectionProducts = async (
  productId: number
): Promise<CollectionType[]> => {
  try {
    const response = await fetch(
      shopifyUrls.collections.products(productId),
      shopifyHeader
    )
    const data = await response.json()
    return data.products
  } catch (err) {
    console.error(err)
    throw new Error('Error trying to fetch collections products')
  }
}
