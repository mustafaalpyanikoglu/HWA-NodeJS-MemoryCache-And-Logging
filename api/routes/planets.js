const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware.index');

const PlanetsController = require('../controllers/planets.controller');

const cache = middleware.cache;

/**
 * GET /api/planets
 */
router.get('/', cache(300), PlanetsController.getPlanets);
/**
 * GET /api/planets/:id
 */
router.get('/:id', cache(300), PlanetsController.getPlanetById);

module.exports = router;