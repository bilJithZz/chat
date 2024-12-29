import React from 'react'
import Related from '../Hero/Related'
import { useParams } from 'react-router-dom'
import { Blogdata } from '@/assets/Assets'

const Post = () => {

    const { id } = useParams()
    const data = Blogdata.find((datas) => datas.id === Number(id));
    console.log({data})

  return (
    <div className='flex flex-col gap-9'>
      <div className='w-9/12 flex flex-col gap-5 m-auto'>
        <div className="flex flex-row gap-2 justify-center text-center item-center">
            <h1 className="text-sm border-2 rounded-full px-2 py-1 bg-yellow-50">popular Article</h1>
            <h1 className="text-gray-400 text-sm">October 23 2023 </h1>
        </div>
        <div className="flex justify-center text-center text-5xl font-medium flex-wrap">
            {data?.title}
        </div>
        <div className="flex justify-center text-center text-xl text-gray-400 flex-wrap">
            {data?.summary}
        </div>
        <img src={data?.image_url || "https://via.placeholder.com/500"} alt="" />
        <div>
            <h1>
                {data?.content}
            </h1>
        </div>    
      </div>
      <p className='text-2xl'>Related Post</p>
      <Related/>
    </div>
  )
}

export default Post
