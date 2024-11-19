import { env } from 'app/config/env'

export const shopifyHeader = {
  headers: {
    'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
  }
}

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/smart_collections.json`,
    products: (id: number) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/collections/${id}/products.json`
  }
}
