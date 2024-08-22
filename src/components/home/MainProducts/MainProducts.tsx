import type { Product } from './interface'

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ''
      }
    }
  )
  const { products } = await response.json()
  return products
}

export const MainProducts = async () => {
  const products = await getProducts()
  console.log(products)
  return (
    <section>
      <h3>Main products</h3>
      {products?.map(product => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </section>
  )
}
