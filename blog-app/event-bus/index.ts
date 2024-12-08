
import express from 'express';
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 4001

app.post('/events', async (req, res) => {
  const event = req.body;
  await axios.post('http://localhost:4000/events', event);
  await axios.post('http://localhost:4001/events', event);
  await axios.post('http://localhost:4002/events', event);
  res.status(200).json({ msg: "ok" })
})


app.listen(PORT, () => console.log(`App is runnign on http://localhost:${PORT}/`))