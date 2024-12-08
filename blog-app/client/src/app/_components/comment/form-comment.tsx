"use client"
import { createComment } from '@/action/comments'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom'
import SubmitButton from '../SubmitButton'


const FormComment = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState('')
  const createCommentById = createComment.bind(null, postId)
  
  return (
    <form action={createCommentById}>
      <div className='flex gap-2'>
        <label htmlFor="comment">Title</label>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name='comment'
          type='text'
          placeholder='comment ....'
        />
        <SubmitButton />
      </div>
    </form>
  )
}

export default FormComment