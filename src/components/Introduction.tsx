import { Link } from 'gatsby'
import React from 'react'
import reputationIcon from "../images/reputation.svg"
import roadIcon from "../images/road.svg"
import machineIcon from "../images/machine.svg"

const Introduction = () => {
   return (
      <div className="x-full lg:h-[20vh] h-[40vh] lg:pt-[10vh] flex flex-col md:flex-row lg:flex-row justify-center items-center px-4 pb-4 lg:px-40 lg:pb-10 bg-black bg-opacity-40 text-center">
        <div className='flex items-center mb-4 ml-14'>
            <img src={reputationIcon} className='w-20 h-20 pl-2'/>
            <div className='flex lg:text-3xl sm:text-xl justify-center text-white drop-shadow-lg'>۳۰ سال سابقه</div>
        </div>
        <div className='flex items-center mb-4 ml-14'>
            <img src={roadIcon} className='w-20 h-20 pl-2'/>
            <div className='flex lg:text-3xl sm:text-xl justify-center text-white'>۱۰ پروژه موفق</div>
        </div>
        <div className='flex items-center mb-4'>
            <img src={machineIcon} className='w-20 h-20 pl-2'/>
            <div className='flex lg:text-3xl sm:text-xl justify-center text-white'>۵۰ دستگاه ماشین آلات</div>
        </div>
       </div>
   )
}

export default Introduction