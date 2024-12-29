import React from 'react'
import Related from '../Hero/Related'
import { useParams } from 'react-router-dom'

const Post = () => {

    const {id}=useParams()

  return (
    <div className='flex flex-col gap-9'>
    <div className='w-9/12 flex flex-col gap-5 m-auto'>
        <div className="flex flex-row gap-2 justify-center text-center item-center">
            <h1 className="text-sm border-2 rounded-full px-2 py-1 bg-yellow-50">popular Article</h1>
            <h1 className="  text-gray-400 text-sm">October 23 2023 </h1>
        </div>
        <div className="flex justify-center text-center text-5xl font-medium flex-wrap">
            Bets Strategy to Acheicv Profitable Harvesing Harvesing Harvesing
        </div>
        <div className="flex justify-center text-center text-xl text-gray-400 flex-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt 
            incidunt eius Lorem, ipsum dolor sit amet consectetur
        </div>
        <img src="https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?t=st=1735324556~exp=1735328156~hmac=8679cf2ce83cd9943ee350ef1f3fab5bd809512e29d36dfa36b5cf4a662ca8b8&w=996" alt="" />
        <div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ipsum quisquam recusandae sequi praesentium corrupti? Blanditiis eligendi alias, commodi reprehenderit quae quaerat cupiditate soluta impedit maiores fugit rerum ratione dolor.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut cum quis nihil consectetur est, veniam expedita ex optio, laborum quaerat alias ad quae atque, repudiandae dolore enim? Facilis, beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium totam soluta officiis quidem at cupiditate deleniti velit quo, mollitia aspernatur laboriosam vitae modi maxime nam sapiente fuga! Dolores, doloribus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci cum eum illo debitis culpa ullam nulla minus. Labore suscipit id nobis? Similique consequatur autem maxime vitae nulla distinctio?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum, placeat odit modi eos, itaque perferendis quae reiciendis nam aut, eaque facilis necessitatibus libero explicabo odio. Ea deleniti accusamus rem.
            </h1>
            </div>    
    </div>
   <p className='text-2xl'> Related Post</p>
     <Related/>
     </div>
  )
}

export default Post