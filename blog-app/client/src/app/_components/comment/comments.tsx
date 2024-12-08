import { getAllComments } from '@/action/comments'
import React from 'react'
import FormComment from './form-comment'

const Comments = async ({ postId }: { postId: string }) => {
  const commentyByPost = await getAllComments({ postid: postId })
  console.log(commentyByPost)
  return (
    <div className='rounded-md outline outline-1 px-[10px] py-[4px]'>
      <h1>Comment Part</h1>
      <FormComment />
      {commentyByPost?.commentsByPostID === null ?
        <p className='text-sm'>No comment yet</p>
        : null
      }
    </div>
  )
}

export default Comments