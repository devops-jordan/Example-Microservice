"use server"
import axios from "axios"
import { revalidatePath } from "next/cache";

export interface ReponseUi {
  msg: string;
  commentsByPostID: null | []
}

const getAllComments = async ({ postid }: { postid: string }) => {
  try {
    const response = await axios.get(`http://localhost:4001/posts/${postid}/comments`);
    console.log(response.data);
    return response.data as ReponseUi;
  } catch (error: any) {
    // console.error("Error: ", error.message);
    // console.error("Error response data: ", error.response.data);
    // console.error("Error response status: ", error.response.status); 
    // console.error("Error response headers: ", error.response.headers); 
    if (error.response) return error.response.data as ReponseUi
  }
}

const createComment = async (formData: FormData) => {
  console.log(formData.get("comment"))
  try {
    await axios.post("http://localhost:4001/posts/12333/comments", {
      content: "hello world22"
    })
    revalidatePath("")
    // await axios('http://localhost:4001/posts')
  } catch (error) {

  }
}


export { getAllComments, createComment }