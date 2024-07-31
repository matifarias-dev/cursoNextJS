import { Footer } from 'app/components/shared/Footer'
import Header from 'app/components/shared/Header/Header'
import 'app/sass/globals.sass'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
