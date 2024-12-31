import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@shadcn/ui/card'
    import { Button } from '@shadcn/ui/button'
    import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@shadcn/ui/dialog'
    import Link from 'next/link'

    const chatbots = [
      {
        title: 'Assistant',
        description: 'General purpose virtual assistant.',
        link: 'https://example.com/Assistant',
        fullDescription: 'General purpose virtual assistant. Can access real-time web data for precise answers.',
      },
      // Add other chatbots here
    ]

    export default function Home() {
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">My Next App</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row flex-wrap items-center justify-center gap-4">
              {chatbots.map((chatbot, index) => (
                <Card key={index} className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>{chatbot.title}</CardTitle>
                    <CardDescription>{chatbot.description}</CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
                  <CardFooter className="flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Details</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{chatbot.title}</DialogTitle>
                          <DialogDescription>
                            {chatbot.fullDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-end">
                          <Link href={chatbot.link} className="text-blue-500 hover:underline">
                            Access
                          </Link>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )
    }
