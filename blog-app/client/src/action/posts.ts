"use server"

import axios from "axios"
/**
 * 
 * @returns micoservice of posts
 */
const getAllPosts = async () => {
  const response = await axios.get("http://localhost:4000/posts")
  return response.data
}

import { revalidatePath } from "next/cache"
const createPost = async (formData: FormData) => {
  try {
    await axios.post('http://localhost:4000/posts', { title: formData.get('title') })
    revalidatePath("")
  } catch (error) {
    console.log('Something wrong with the db')
  }
}

export { getAllPosts, createPost }