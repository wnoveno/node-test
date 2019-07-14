const express = require('express');

const mustache = require('mustache-express');
const _ = require('lodash');

const port = 3000;
let source = "https://www.reddit.com/r/node.rss";
let app = express();

app.engine('html', mustache());
app.set('view engine' ,'html');
app.set('views' , __dirname + '/views');

app.get('/', function (req, res) {
  const parser = require('rss-parser');
  let reader = new parser();
  source = req.query.source != null ? req.query.source : source;
  (async () => {
    let feed = await reader.parseURL(source);
    res.render('index', {"data": feed, "source": source })
  })();
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))