/**
 * Middleware express functions and configuration for security, logging, and error handling
 */

module.exports = middleware = {
  /**
   * Cache middleware
   */
  cache: require('./cache.middleware').cacheMiddleware,
};
