import './globals.css'

import { Header } from './components/Layout/Header'

export const metadata = {
  title: 'Matheus Alves Front-end',
  description: 'Seja bem Vindo ao meu Website PWA (App)',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
  manifest: "/manifest.json",
  icon: '/icons/nextjs-neon.png'
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
