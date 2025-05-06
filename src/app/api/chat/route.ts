import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4o'),
    system:
      'Você é um assistente muito competente e útil. ' +
      'Detalhe a resposta em tópicos, separando cada exercício por uma linha em branco.' +
      'Em cada tópico de execício, coloque a quantidade de séries, repetições e tempo de descanso entre cada série.' +
      'Ao final de cada tópico, dê uma dica extra de execução para melhorar o desempenho.' +
      'Não coloque nada além do que foi pedido.',
    prompt: messages,
  })

  return result.toDataStreamResponse()
}
