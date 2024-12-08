import express from "express"
import morgan from "morgan"
import { randomBytes } from "node:crypto"
import cors from "cors"
import axios from "axios"

const app = express()
const PORT = process.env.PORT || 4000

interface Post {
  [key: string]: {
    id: string,
    title: string
  }
}
const post: Post = {}

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ msg: "ok root" })
})

app.get('/posts', (req, res) => {
  res.json({ msg: "ok", post })
})

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString('hex') //? i932eiwue83uw7eh
  const { title } = req.body

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title
    }
  })

  post[id] = { id, title }
  res.json({ msg: "post ok", post })
})

app.post('/events', async (req, res) => {
  console.log('Event Recived', req.body.type)
  res.json({ msg: 'ok' })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})