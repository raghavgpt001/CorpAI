import { get_preferences, openDB, save_preferences } from '@/lib/sqlite'
import { getAuth } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Ollama } from 'ollama'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

    const {userId} = getAuth(req)
    
    const response = await get_preferences(userId??"")
    const conversation = [
        { 
            role: "system",
            content: `You are a professional writing trainer and ${req.body.prompt}
            This is your user preferences:
            Industry : ${response? response.industry : "Beginner"}
            Objectives : ${response? response.objectives: "Just for fun"}
            
            You should not send empty responses.
            ` 

        }
    ]
    console.log([...conversation, ...req.body.conversation])
    const ollama = new Ollama({host: "http://localhost:11434"})
    const message = await ollama.chat({
        model: "gemma:2b",
        messages: [...conversation, ...req.body.conversation]
    })
    res.status(200).json({ response: message })
}