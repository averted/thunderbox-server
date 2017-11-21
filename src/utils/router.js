module.exports = {
  router: null,

  setRouter: function(router) {
    this.router = router;
  },

  register: function(path, methods) {
    for (var method in methods) {
      if (methods.hasOwnProperty(method)) {
        switch (method) {
          case 'all':
            this.router.all(path, methods[method]);
            break;
          case 'get':
            this.router.get(path, methods[method]);
            break;
          case 'post':
            this.router.post(path, methods[method]);
            break;
          case 'put':
            this.router.put(path, methods[method]);
            break;
          case 'delete':
            this.router.delete(path, methods[method]);
            break;
        }
      }
    }
  },

  allowCrossOrigin: function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next()
  }
};
