import { ProductsWrapper } from '../../../components/store/ProductsWrapper'
import { getProducts } from '../../../services/shopify/products'

interface Props {
  params: {
    category: string
    searchParams?: {
      medidas: string
    }
  }
}
export default async function Category(props: Props) {
  const products = await getProducts()

  return <ProductsWrapper products={products} />
}
