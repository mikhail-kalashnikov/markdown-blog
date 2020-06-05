const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('articles/new.ejs');
});
module.exports = router;
