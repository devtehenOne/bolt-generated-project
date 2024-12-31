import { Inter } from 'next/font/google'
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@shadcn/ui/card'
    import { Button } from '@shadcn/ui/button'
    import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@shadcn/ui/dialog'

    const inter = Inter({ subsets: ['latin'] })

    export const metadata = {
      title: 'My Next App',
      description: 'A Next.js app with TypeScript and Shadcn UI.',
    }

    export default function Layout({ children }) {
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
