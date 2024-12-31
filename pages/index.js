import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@shadcn/ui/card'
    import { Button } from '@shadcn/ui/button'
    import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@shadcn/ui/dialog'
    import Link from 'next/link'

    const chatbots = [
      {
        title: 'Assistant',
        description: 'Assistant virtuel polyvalent. Pour les requêtes nécessitant des informations à jour, il peut accéder à des données en temps réel sur le web pour des réponses plus précises.',
        link: 'https://poe.com/Assistant',
        fullDescription: 'Assistant virtuel polyvalent. Pour les requêtes nécessitant des informations à jour, il peut accéder à des données en temps réel sur le web pour des réponses plus précises. Il est conçu pour être rapide et fiable, offrant une assistance 24/7.',
      },
      // Add all other chatbots here
      {
        title: 'Web-Search',
        description: 'Assistant virtuel web qui effectue des recherches sur Internet pour enrichir ses réponses. Particulièrement efficace pour les requêtes concernant des informations actualisées ou des faits spécifiques. Alimenté par GPT 4o Mini.',
        link: 'https://poe.com/web-Search',
        fullDescription: 'Assistant virtuel web qui effectue des recherches sur Internet pour enrichir ses réponses. Particulièrement efficace pour les requêtes concernant des informations actualisées ou des faits spécifiques. Alimenté par GPT 4o Mini.',
      },
      // Continue adding other chatbots as needed
    ]

    export default function Home() {
      return (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">AIFTW Chatbot Dashboard</h1>
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
                        <Button variant="outline">Détails</Button>
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
                            Accéder
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
