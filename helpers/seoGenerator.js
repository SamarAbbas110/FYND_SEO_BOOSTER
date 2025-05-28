const client = require('../services/openai')

async function generateSeoMetadata(inputText) {
  try {
    const prompt = `
Given the following content, generate an SEO-optimized title and meta description.

Only return a valid JSON object with keys "title" and "description" and nothing else.
Content:
${inputText}
	
Respond in this JSON format:
{
  "title": "...",
  "description": "..."
}
    `.trim()

    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are an assistant that returns only valid JSON, no explanations or formatting. Only reply with the JSON object.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    })
    console.log('OpenAI response:', response)
    const text = response.choices[0].message.content
    return JSON.parse(text) // Only works if response is valid JSON
  } catch (err) {
    console.error('Error generating SEO metadata:', err.message)
    return null
  }
}

module.exports = generateSeoMetadata
