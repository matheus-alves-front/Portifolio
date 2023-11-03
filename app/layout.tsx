import './styles/globals.scss'
import { Metadata, Viewport } from 'next'
import { Header } from './components/Layout/Header'
import { ReactNode } from 'react'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Matheus Alves Front-end',
  description: 'Seja bem Vindo ao meu Website PWA (App)',
  manifest: "/manifest.json",
  icons: {
    icon: '/assets/foto-perfil.jpg',
    shortcut: '/assets/foto-perfil.jpg',
    apple: '/assets/foto-perfil.jpg',
    other: {
      rel: '/assets/foto-perfil.jpg',
      url: '/assets/foto-perfil.jpg',
    },
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  width: 'device-width',
  userScalable: false,
  viewportFit: 'cover'
}

export default async function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
