"use server"
import axios from "axios"
const createPost = async (formData: FormData) => {
  try {
    await axios.post('http://localhost:4000/posts', { title: formData.get('title') })
  } catch (error) {
    console.log('Something wrong with the db')
  }
}

export default createPost