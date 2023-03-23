import './globals.css'

import { Header } from './components/Layout/Header'

export const metadata = {
  title: 'Matheus Alves Portfólio',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
  description: 'Com PWA',
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
