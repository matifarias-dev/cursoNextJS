import { Description } from 'app/components/home/Description'
import { Hero } from 'app/components/home/Hero'
import { Footer } from 'app/components/shared/Footer'
import { Header } from 'app/components/shared/Header'
import 'app/sass/globals.sass'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({
  weight: ['100', '300', '500'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  )
}
