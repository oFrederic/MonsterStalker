const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./client'));
const knex = require('./db/knex');

app.get('/api/monster', async (req, res) => {
  const data = await knex.select().table('monster');
  if (data.length === 0) return res.sendStatus(404);
  res.status(200);
  res.send(data);
});

app.get('/api/monster/:id', async (req, res) => {
  const id = req.params.id;
  const data = await knex.select().from('monster').where('id', id);
  if (data.length === 0) return res.sendStatus(404);
  res.status(200);
  res.send(data);
});

app.delete('/api/monster/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await knex('monster').where('id', id).del();
  res.sendStatus(200);
});

app.patch('/api/monster/:id', async (req, res) => {
  const id = req.params.id;
  const updateObj = req.body;

  await knex('monster').where({ id: id }).update(updateObj);
  res.sendStatus(200);
});

app.post('/api/monster/', async (req, res) => {
  console.log(req.body);
  if (req.body) {
    await knex('monster').insert(req.body);
    res.sendStatus(200);
    return;
  }

  res.sendStatus(404);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
