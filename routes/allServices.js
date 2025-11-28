const express = require('express');
const router = express.Router();
const allServicesController = require('../controllers/allServicesController');

router.get('/', allServicesController.getAllServices);
router.get('/:slug', allServicesController.getServiceBySlug);
router.put('/:slug', allServicesController.updateServiceBySlug);

module.exports = router;
