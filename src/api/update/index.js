export default {
  /**
   * Testing, todo: remove
   */
  get: function(req, res, next) {
    const state = req.app.get('state')
    return res.status(200).json({ state })
  }
}
