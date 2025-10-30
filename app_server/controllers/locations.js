// Sample data for locations
const locations = [
  {
    id: 'burgerking',
    name: 'Burger King',
    address: '125 High Street, Reading, RG6 1PS',
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    rating: 3,
    coords: { lat: 51.455041, lng: -0.9690884 },
    openingTimes: [
      { days: 'Monday - Friday', hours: '7:00am - 7:00pm' },
      { days: 'Saturday', hours: '8:00am - 5:00pm' },
      { days: 'Sunday', hours: 'closed' }
    ],
    reviews: [
      { author: 'Simon Holmes', rating: 3, timestamp: '16 February 2017', reviewText: 'Great place!' }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee',
    address: '125 High Street, Reading, RG6 1PS',
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    rating: 4,
    coords: { lat: 51.456, lng: -0.970 },
    openingTimes: [
      { days: 'Monday - Friday', hours: '7:00am - 7:00pm' },
      { days: 'Saturday', hours: '8:00am - 5:00pm' },
      { days: 'Sunday', hours: 'closed' }
    ],
    reviews: [
      { author: 'Charlie Chaplin', rating: 4, timestamp: '14 February 2017', reviewText: 'Nice coffee.' }
    ]
  },
  {
    id: 'starcups',
    name: 'Starcups',
    address: '125 High Street, Reading, RG6 1PS',
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    rating: 2,
    coords: { lat: 51.457, lng: -0.968 },
    openingTimes: [
      { days: 'Monday - Friday', hours: '7:00am - 7:00pm' },
      { days: 'Saturday', hours: '8:00am - 5:00pm' },
      { days: 'Sunday', hours: 'closed' }
    ],
    reviews: [
      { author: 'Alice Smith', rating: 2, timestamp: '20 February 2017', reviewText: 'Okay coffee.' }
    ]
  }
];

/* GET 'home' page */
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8rr',
    locations
  });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  const locationId = req.params.id;
  const location = locations.find(loc => loc.id === locationId);

  if (!location) {
    return res.status(404).send('Location not found');
  }

  res.render('location-info', { title: location.name, location });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  const locationId = req.params.id;
  const location = locations.find(loc => loc.id === locationId);

  if (!location) {
    return res.status(404).send('Location not found');
  }

  res.render('add-review', { title: 'Add Review for ' + location.name, location });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
