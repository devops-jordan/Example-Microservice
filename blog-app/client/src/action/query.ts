"use server"
import axios from "axios"

export interface ResponseCompleteUI {
  id: string;
  title: string,
  comments: [CommentByPost]
}

export interface CommentByPost {
  id: string,
  comment: string
}

const getAllPostAndComents = async () => {
  try {
    const response = await axios.get("http://localhost:4002/posts")
    return { data: Object.values(response.data.posts) as Array<ResponseCompleteUI> }
  } catch (error) {
    return { data: null }
  }
}
export { getAllPostAndComents }