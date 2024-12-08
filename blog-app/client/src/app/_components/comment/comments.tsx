import { getAllComments } from '@/action/comments'
import React from 'react'
import FormComment from './form-comment'

const Comments = async ({ postId }: { postId: string }) => {
  const commentyByPost = await getAllComments({ postid: postId })
  return (
    <div className='rounded-md outline outline-1 px-[10px] py-[4px]'>
      <h1>Comment Part</h1>
      <FormComment postId={postId} />
      {commentyByPost?.commentsByPostID === null ?
        <p className='text-sm'>No comment yet</p>
        :
        <>
          {commentyByPost?.commentsByPostID.content.map((coment) => (
            <p key={coment} className='text-sm' >{coment}</p>
          ))}
        </>
      }
    </div>
  )
}

export default Comments