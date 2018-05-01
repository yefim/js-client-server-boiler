const express = require('express');
const cors = require('cors');
const Queue = require('bee-queue');

const app = express();
const queue = new Queue('email');

app.use(cors({optionsSuccessStatus: 200}));

app.get('/double', (req, res) => {
  const n = parseInt(req.query.n, 10);

  res.send({n: n * 2});
});

app.post('/enq', (req, res) => {
  queue
    .createJob({
      template: 'welcome',
      to: 'name@example.com'
    })
    .timeout(3000)
    .retries(3)
    .save()
    .then(() => {
      res.send('OK');
    })
    .catch(() => {
      res.status(400).send(':(');
    });
});

app.listen(process.env.PORT || 5000);
