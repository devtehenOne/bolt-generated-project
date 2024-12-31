import './globals.css'
    import { Inter } from 'next/font/google'

    const inter = Inter({ subsets: ['latin'] })

    export const metadata = {
      title: 'AIFTW Chatbot Dashboard',
      description: 'Explore a variety of chatbots tailored to your needs, from general assistants to specialized models for coding, image generation, and more.',
    }

    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              {children}
            </main>
          </body>
        </html>
      )
    }
