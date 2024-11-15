import Link from 'next/link'
import { getCollections } from '../../../services/shopify/collections'

export default async function CategoryLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const categories = await getCollections()

  return (
    <>
      {categories.map(category => (
        <Link key={category.id} href={`/store/${category.handle}`}>
          {category.title}
        </Link>
      ))}
      {children}
    </>
  )
}
