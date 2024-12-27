import React from 'react'
import Navbar from './Home/Navbar'
import Hero from './Home/Hero'

const App = () => {
  return (
    <div className='w-10/12 px-16 bg-slate-200 m-auto'>
      <div  className=" m-auto bg-white">
        <div className='px-14'>
     <Navbar/>
     <Hero/>
     </div>
     </div>
    </div>
  )
}

export default App