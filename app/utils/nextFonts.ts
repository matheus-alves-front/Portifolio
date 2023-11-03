import { Archivo_Black, Archivo, Fira_Code } from 'next/font/google'

export const archivoBlackFont = Archivo_Black({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const archivoFont = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const firaCodeFont = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  weight: '600'
})