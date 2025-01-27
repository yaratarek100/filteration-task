import React from 'react'

export default function Title({title}) {
  return (
    <div className='scale-75 sm:scale-100'>
         <div className="title my-9 flex justify-center items-center">
        <div className="b">
          <div  className= "s"></div>
          <div></div>
        </div>

        <h1 className="title text-[#6D91EE] font-bold text-5xl text-center">
          {title}
        </h1>
        
        <div className="b">
          <div></div>
          <div className= "s"></div>
        </div>
      </div>
    </div>
  )
}
