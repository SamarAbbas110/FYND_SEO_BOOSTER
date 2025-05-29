const client = require('../services/openai')

async function generateSeoMetadata(inputText) {
  try {
    const prompt = `
Given the following content, generate an SEO-optimized title and meta description.
Try to generate the title and description with a score of 70 or above. Keep relevance to the content, and ensure they are concise and engaging.
Keep the title under 60 characters and the description under 160 characters.
Try using power words to make them more compelling.
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
