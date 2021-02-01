const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/monster', async (req, res) => {
  res.sendStatus(200);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
