import { getAllComments } from '@/action/comments'
import React from 'react'
import FormComment from './form-comment'
import { CommentByPost } from '@/action/query'

const Comments = async ({ commentsByPost, postId }: { commentsByPost: [CommentByPost],postId:string }) => {
  return (
    <div className='rounded-md outline outline-1 px-[10px] py-[4px]'>
      <h1>Comment Part</h1>
      <FormComment postId={postId} />
      {commentsByPost.map(comment=> (
        <div key={comment.id}>
            <p className='text-sm'>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments