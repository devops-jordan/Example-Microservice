"use server"
import axios from "axios"
/**
 * 
 * @returns micoservice of posts
 */
import { revalidatePath } from "next/cache"


const getAllPosts = async () => {
  const response = await axios.get("http://localhost:4000/posts")
  return response.data
}

const createPost = async (formdata:FormData) => {
  try {
    await axios.post('http://localhost:4000/posts', { title: formdata
      .get('title')
     })
    revalidatePath("")
  } catch (error) {
    console.log('Something wrong with the db')
  }
}

export { getAllPosts, createPost }