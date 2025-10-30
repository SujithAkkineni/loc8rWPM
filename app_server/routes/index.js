const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:id', ctrlLocations.locationInfo); // dynamic route for store details
router.get('/location/:id/review/new', ctrlLocations.addReview); // dynamic route for adding review
router.get('/others', ctrlOthers.others);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;