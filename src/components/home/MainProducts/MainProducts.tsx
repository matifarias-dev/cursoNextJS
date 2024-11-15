import { getProducts } from 'app/services/shopify/products'
import Image from 'next/image'
import styles from './MainProducts.module.sass'

export const MainProducts = async () => {
  const products = await getProducts()
  console.log(products)
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map(product => {
          const imageSrc = product.image.src
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                src={imageSrc}
                fill
                alt={product.title}
                loading='eager'
                sizes='min-height: 400px'
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}
