export default {
  /**
   * Testing
   * TODO: remove
   */
  get: function(req, res, next) {
    const state = req.app.get('state')
    const available = !state.available
    const date = new Date()
    const updatedState = { available, date }

    req.app.set('state', updatedState)
    return res.status(200).json(updatedState)
  },

  /**
   * Update thunderbox available
   */
  post: function(req, res, next) {
    const state = req.app.get('state')
    const available = !state.available
    const date = new Date()
    const updatedState = { available, date }

    req.app.set('state', updatedState)
    return res.status(200).json(updatedState)
  }
}
