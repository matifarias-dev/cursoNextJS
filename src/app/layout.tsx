import { Footer } from 'app/components/shared/Footer'
import Header from 'app/components/shared/Header/Header'
import 'app/sass/globals.sass'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["100", "300", "500"],
  subsets:['latin']
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
