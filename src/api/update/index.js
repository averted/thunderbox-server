export default {
  /**
   * Testing
   * TODO: remove
   */
  get: function(req, res, next) {
    const state = req.app.get('state')
    const status = !state.status
    const date = new Date()
    const updatedState = { status, date }

    req.app.set('state', updatedState)
    return res.status(200).json(updatedState)
  },

  /**
   * Update thunderbox status
   */
  post: function(req, res, next) {
    const state = req.app.get('state')
    const status = !state.status
    const date = new Date()
    const updatedState = { status, date }

    req.app.set('state', updatedState)
    return res.status(200).json(updatedState)
  }
}
