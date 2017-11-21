export default {
  /**
   * Returns thunderbox state
   */
  get: function(req, res, next) {
    const { status, date } = req.app.get('state')
    return res.status(200).json({ status, date })
  }
}
