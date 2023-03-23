import './styles/globals.scss'

import { Header } from './components/Layout/Header'

export const metadata = {
  title: 'Matheus Alves Front-end',
  description: 'Seja bem Vindo ao meu Website PWA (App)',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
  // PWA PRODUCTION
  // manifest: "/manifest.json",
  icons: {
    icon: '/icons/nextjs-neon.png',
    shortcut: '/icons/nextjs-neon.png',
    apple: '/icons/nextjs-neon.png',
    other: {
      rel: '/icons/nextjs-neon.png',
      url: '/icons/nextjs-neon.png',
    },
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
