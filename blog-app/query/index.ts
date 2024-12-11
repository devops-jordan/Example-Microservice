import express from "express"
import cors from "cors"
import morgan from "morgan";

const PORT = process.env.PORT || 4002
const app = express();

export interface Comment {
  id: string,
  comment: string
}
export interface PostDetail {
  id: string,
  title: string,
  comments: Comment[]
}
export interface Post {
  [key: string]: PostDetail
}

let posts: Post = {}

// Example of post
// post = {
//   '123231': {
//     id: "123",
//     title: 'post title',
//     comments: [
//       { id: "123", comment: "holiday" },
//       { id: "122", comment: "hi dev" }
//     ]
//   }
// }

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/posts', (req, res) => {
  res.json({ msg: "ok", posts })
})
app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { commentId, content, postId } = data
    const post = posts[postId];
    post.comments.push({ id: commentId, comment: content })
  }

  res.json({ msg: "ok" })
})



app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))