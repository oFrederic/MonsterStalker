const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./client/index.html'));
const knex = require('./db/knex');

app.get('/api/monster', async (req, res) => {
  const data = await knex.select().table('monster');
  res.status(200);
  res.send(data);
});

app.get('/api/monster/:id', async (req, res) => {
  const id = req.params.id;
  const data = await knex.select().from('monster').where('id', id);

  res.status(200);
  res.send(data);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
