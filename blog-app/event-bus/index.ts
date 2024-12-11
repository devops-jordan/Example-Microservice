
import express from 'express';
import axios from "axios";
import morgan from 'morgan';
import cors from "cors"


const app = express();
const PORT = process.env.PORT || 4005

// TODO -> install body-parse if is necessary

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


app.post('/events', async (req, res) => {
  const event = req.body;
  await axios.post('http://localhost:4000/events', event);
  await axios.post('http://localhost:4001/events', event);
  await axios.post('http://localhost:4002/events', event);
  res.status(200).json({ msg: "ok" })
})


app.listen(PORT, () => console.log(`App is runnign on http://localhost:${PORT}/`))