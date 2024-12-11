import { getAllPosts } from '@/action/posts'
import React from 'react'
import PostCard from './post-card'
import { ResponseCompleteUI } from '@/action/query'

const Posts = async ({ confitData }: { confitData: Array<ResponseCompleteUI> | null }) => {
  return (
    <div className='grid grid-cols-3 gap-2'>

      {confitData && (
        confitData.map((d) => (
          <PostCard
            key={d.id}
            data={d}
          />
        ))
      )}
    </div>
  )
}

export default Posts