export default {
  /**
   * Returns thunderbox state
   */
  get: function(req, res, next) {
    const { available, date, graph } = req.app.get('state')
    return res.status(200).json({ available, date, graph })
  }
}
