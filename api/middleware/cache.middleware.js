const NodeCache = require('node-cache');

const nodeCache = new NodeCache();

const cacheMiddleware = (duration) => (req, res, next) => {
  // is request a GET?
  // if not, call next() and return
  if (req.method !== 'GET') {
    console.error('Cache middleware only works with GET requests')
    return next();
  }

  // Cache key is the request URL
  const key = req.originalUrl;
  const cachedResponse = nodeCache.get(key);

  // If the response is cached, return it
  if (cachedResponse) {
    console.log(`Cache hit for ${key}`)
    return res.send(cachedResponse);
  } else {
    // if not, replace. Send with method to set response to cache.
    console.log(`Cache miss for ${key}`);
    res.originalSend = res.send;
    res.send = (body) => {
      nodeCache.set(key, body, duration);
      res.originalSend(body);
    };
    next();
  }
}

module.exports = {
  /**
   * Cache middleware
   * @param {number} duration - Cache duration in seconds
   * @returns {Function} - Express middleware function
   * @example
   * router.get('/', cache(300), PlanetsController.getPlanets);
   */
  cacheMiddleware,
};