"use client"
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="bg-black text-white flex justify-around items-center w-full h-16">
        <div className="text-white bg-black">
          <span className="bg-black text-white text-3xl font-bold">GetMeaChai!</span>
        </div>
       <div> <ul className="flex justify-between gap-4 ">
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
          <li>blog</li>
        </ul></div>
      </div>
    </div>
  )
}

export default Navbar