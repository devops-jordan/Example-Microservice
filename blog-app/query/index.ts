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

let post: Post = {}

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
app.use(morgan('dev'))

app.get('/posts', (req, res) => { })
app.post('/events', (req, res) => { })



app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))