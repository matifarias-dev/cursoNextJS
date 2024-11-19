import { ProductsWrapper } from '../../../components/store/ProductsWrapper'
import {
  getCollectionProducts,
  getCollections
} from '../../../services/shopify/collections'
import { getProducts } from '../../../services/shopify/products'

interface Props {
  params: {
    collection: string[]
    searchParams?: {
      medidas: string
    }
  }
}
export default async function Category(props: Props) {
  let products = []
  if (props.params.collection?.length > 0) {
    const collectionHandle = props.params.collection[0]
    const collections = await getCollections()
    const collectionId =
      collections.find(col => col.handle === collectionHandle)?.id || 0

    products = await getCollectionProducts(collectionId)
  } else {
    products = await getProducts()
  }

  return <ProductsWrapper products={products} />
}
