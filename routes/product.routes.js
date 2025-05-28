const {
  view,
  productsListForApplication,
} = require('../controllers/product.controller')
const express = require('express')
const router = express.Router()

router.route('/').get(view)
router.route('/sayHi').get((req, res) => {
  return res.status(200).json({ message: 'Hello from the product route!' })
})
router.route('/application/:application_id').get(productsListForApplication)

module.exports = router
