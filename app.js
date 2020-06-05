const express = require('express');
const app = express();
const port = process.env.PORT || 9999;
app.set('view engine', 'ejs');
app.use('/articles', require('./routes/articles'));
app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test Articles',
      createdAt: new Date(),
      description: 'This is a article',
    },
    {
      title: 'Test Articles 1',
      createdAt: new Date(),
      description: 'This is a article',
    },
  ];
  res.render('articles/index.ejs', { articles: articles });
});
app.use('*', function (req, res, next) {
  res.send('404 page');
});
app.listen(port, () => {
  console.log('server listening on ' + port);
});
