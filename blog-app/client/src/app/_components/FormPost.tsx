"use client"
import {createPost} from '@/action/posts'
import React, { useState } from 'react'
import SubmitButton from './SubmitButton'

const FormPost = () => {
  const [title, setTitle] = useState('')

  return (
    <form action={createPost} className='py-3'>
      <div className='flex gap-2'>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
          placeholder='title ...' />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

export default FormPost