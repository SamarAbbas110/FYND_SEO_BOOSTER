async function view(req, res, next) {
  try {
    const { platformClient } = req
    const data = await platformClient.catalog.getProducts()
    return res.json(data)
  } catch (err) {
    next(err)
  }
}

// Get products list for application
async function productsListForApplication(req, res, next) {
  try {
    const { platformClient } = req
    const { application_id } = req.params
    const data = await platformClient
      .application(application_id)
      .catalog.getAppProducts()
    return res.json(data)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  view,
  productsListForApplication,
}
