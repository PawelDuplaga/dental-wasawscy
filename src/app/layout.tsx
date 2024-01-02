import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] })

const PPNeueMontreal = localFont({
  src: [
    {
      path: './_fonts/PPNeueMontreal-Thin.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './_fonts/PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './_fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal'
    },
  ]
})

export const metadata: Metadata = {
  title: 'Wąsowscy stomatologia',
  description: 'Gabinet stomatologiczny Wąsowskich w Konstancin-Jeziorna.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={PPNeueMontreal.className}>
        {children}
      </body>
    </html>
  )
}
