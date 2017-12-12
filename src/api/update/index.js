export default {
  /**
   * Testing
   * TODO: remove
   */
  get: function(req, res, next) {
    const state = req.app.get('state')
    const available = !state.available
    const graph = state.graph
    const date = new Date()
    const hour = date.getHours()

    if (!available) {
      let increment = graph[hour] ? graph[hour] : 0
      graph[hour] = ++increment
    }

    req.app.set('state', { available, date, graph })
    return res.status(200).json({ available, date, graph })
  },

  /**
   * Update thunderbox available
   */
  post: function(req, res, next) {
    const state = req.app.get('state')
    const available = !state.available
    const graph = state.graph
    const date = new Date()
    const hour = date.getHours()

    if (!available) {
      let increment = graph[hour] ? graph[hour] : 0
      graph[hour] = ++increment
    }

    req.app.set('state', { available, date, graph })
    return res.status(200).json({ available, date, graph })
  }
}
