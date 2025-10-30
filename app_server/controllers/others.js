/* GET 'about' page */
const about = (req, res) => {
 res.render('index', { title: 'About' });
};

/* GET 'others' page */
const others = (req, res) => {
  res.render('index', { title: 'Others' });
};

module.exports = {
 about,
 others
};