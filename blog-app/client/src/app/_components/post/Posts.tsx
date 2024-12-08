import { getAllPosts } from '@/action/posts'
import React from 'react'
import PostCard from './post-card'

const Posts = async () => {
  const data = await getAllPosts()
  const confitData: Array<any> = Object.values(data.post)
  return (
    <div className='grid grid-cols-3 gap-2'>
      {confitData.map((d) => (
        <PostCard
          key={d.id}
          data={d}
        />
      ))}
    </div>
  )
}

export default Posts