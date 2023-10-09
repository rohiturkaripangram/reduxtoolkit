import React from 'react'
import { BiWinkSmile } from "react-icons/bi";

import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
  return (
    <div className='flex justify-center items-center flex-col gap-y-12 w-screen h-96'>
    <h1>Do some Shopping and then Come here 
        <BiWinkSmile size={36} className="inline-block text-amber-500"  />
    
    </h1>
    <button
type="button"
class="rounded-md bg-button-bg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-button-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
onClick={()=>navigate('/product')}
>
Shop now
</button>
  </div>
  )
}

export default Home