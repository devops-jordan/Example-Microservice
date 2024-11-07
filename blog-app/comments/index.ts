import express from "express"
import morgan from "morgan"
import { randomBytes } from "node:crypto"

interface CommentByPost {
  [key: string]: {
    id: string,
    content: string[]
  }
}

const app = express()
const PORT = process.env.PORT || 4001
const commentsByPostID: CommentByPost = {}

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ msg: "ok" })
})

app.get('/posts/comments', (req, res) => {
  res.json({ msg: "all ok", commentsByPostID })
})

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { content } = req.body
  if (!commentsByPostID[req.params.id]) {
    commentsByPostID[req.params.id] = { id: commentId, content: [content] }
  } else {
    const comments: Array<String> = [...commentsByPostID[req.params.id].content]
    commentsByPostID[req.params.id] = { id: commentId, content: [...comments, content] }
  }
  // commentsByPostID[req.params.id] = { content, id: commentId }

  res.json({ msg: "ok", commentsByPostID })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})