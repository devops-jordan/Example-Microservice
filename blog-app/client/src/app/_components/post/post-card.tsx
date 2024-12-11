import React from 'react'
import Comments from '../comment/comments'
import { ResponseCompleteUI } from '@/action/query'

const PostCard = ({ data }: { data: ResponseCompleteUI }) => {
  console.log(data.comments)
  return (
    <div className='rounded-sm outline outline-1 px-[10px] py-[4px]'>
      <h1 className='text-sky-700 font-bold tracking-tighter'>Post Card</h1>
      <p className='text-sm font-semibold'>{data.id}</p>
      <p className='text-md '>{data.title}</p>
      <Comments commentsByPost={data.comments} postId={data.id} />
    </div>
  )
}

export default PostCard