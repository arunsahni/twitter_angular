const express = require('express');
const Twitter = require('twit');

const app = express();

const client = new Twitter({
  consumer_key: '7oruLycyUI3M2H9rb9VSRIhTx',
  consumer_secret: 'Da5bh55uiQpmt8QpMGXsnaqcxauZiBIeSt63tY2Y0sDKdxsj4B',
  access_token: '1338290707-J0GkDNEQBCQkglTdCGKZ1RwpmIUxSntRi8LPdBQ',
  access_token_secret: '1DlpU9CCWIy37cVMBpDzgAPqkuN9SthJI2fEexSaqOqqV'
});

app.use(require('cors')());
app.use(require('body-parser').json());

app.get('/api/user', (req, res) => {
  client
    .get('account/verify_credentials')
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      res.send(error);
    });
});

let cache = [];
let cacheAge = 0;

app.get('/api/home', (req, res) => {
  if (Date.now() - cacheAge > 60000) {
    cacheAge = Date.now();
    const params = { tweet_mode: 'extended', count: 200 };
    if (req.query.since) {
      params.since_id = req.query.since;
    }
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
        cache = timeline;
        res.send(timeline);
      })
      .catch(error => res.send(error));
  } else {
    res.send(cache);
  }
});

app.post('/api/favorite/:id', (req, res) => {
  const path = req.body.state ? 'create' : 'destroy';
  client
    .post(`favorites/${path}`, { id: req.params.id })
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

app.post('/api/retweet/:id', (req, res) => {
  const path = req.body.state ? 'retweet' : 'unretweet';
  client
    .post(`statuses/retweet/${req.params.id}`)
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error));
});

app.get('/api/search/:user_name', (req,res) => {
  client
    .get('/users/search', {q: req.params.user_name})
    .then(tweet => res.send(tweet))
    .catch(error => res.send(error))
})

app.listen(3000, () => console.log('Server running'));
