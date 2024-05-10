import { Link } from 'gatsby'
import React from 'react'
import reputationIcon from "../images/reputation.svg"
import roadIcon from "../images/road.svg"
import machineIcon from "../images/machine.svg"

const Introduction = () => {
   return (
      <div className="x-full lg:h-[20vh] h-[40vh] lg:pt-[10vh] flex flex-col lg:flex-row-reverse justify-center items-center px-4 pb-4 lg:px-40 lg:pb-10 bg-black bg-opacity-40">
        <div className='flex items-center mb-4 ml-14'>
            <div className='flex lg:text-3xl sm:text-xl justify-center text-white drop-shadow-lg'><span>سال سابقه</span><span className='pl-2'>۳۰</span></div>
            <img src={reputationIcon} className='w-20 h-20 pl-2'/>
        </div>
        <div className='flex items-center mb-4 ml-14'>
            <div className='flex lg:text-3xl sm:text-xl justify-center text-white'><span> پروژه موفق</span><span className='pl-2'>۵۰</span></div>
            <img src={roadIcon} className='w-20 h-20 pl-2'/>
        </div>
        <div className='flex items-center mb-4'>
            <div className='flex lg:text-3xl sm:text-xl justify-center text-white'><span> دستگاه ماشین آلات</span><span className='pl-2'>۴۰</span></div>
            <img src={machineIcon} className='w-20 h-20 pl-2'/>
        </div>
       </div>
   )
}

export default Introduction