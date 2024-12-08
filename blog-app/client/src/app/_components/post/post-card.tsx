import React from 'react'
import Comments from '../comment/comments'

const PostCard = ({ data }: { data: any }) => {
  return (
    <div className='rounded-sm outline outline-1 px-[10px] py-[4px]'>
      <h1 className='text-sky-700 font-bold tracking-tighter'>Post Card</h1>
      <p className='text-sm font-semibold'>{data.id}</p>
      <p className='text-md '>{data.title}</p>
      <Comments postId={data.id} />
    </div>
  )
}

export default PostCard