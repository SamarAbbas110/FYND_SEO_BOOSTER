const generateSeoMetadata = require('../helpers/seoGenerator')

async function generateSeo(req, res) {
  const { content, count } = req.body
  if (!content) {
    return res.status(400).json({ error: 'Missing content' })
  }

  const result = await generateSeoMetadata(content, count)
  if (!result) {
    return res.status(500).json({ error: 'Failed to generate SEO metadata' })
  }

  res.json(result)
}

module.exports = {
  generateSeo,
}
