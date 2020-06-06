const express = require('express');
const app = express();
const Article = require('./models/article');
const methodOverride = require('method-override');
const port = process.env.PORT || 9999;
require('./config/mongoose');

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createAt: 'desc' });
  res.render('articles/index.ejs', { articles: articles });
});
app.use('/articles', require('./routes/articles'));

app.use('*', function (req, res, next) {
  res.send('404 page');
});

app.listen(port, () => {
  console.log('server listening on ' + port);
});
