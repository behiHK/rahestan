import { Link } from 'gatsby'
import React from 'react'
import reputationIcon from "../images/reputation-icon.png"
import roadIcon from "../images/road-icon.png"
import machineIcon from "../images/machine-icon.png"

const Introduction = () => {
    return (
        <div className="x-full lg:h-[20vh] h-[40vh] lg:pt-[10vh] bg-gray-0 flex flex-col md:flex-row lg:flex-row justify-center items-center px-4 pb-4 lg:px-40 lg:pb-10 text-center">
            <div className='flex items-center mb-4 ml-14'>
                <img src={reputationIcon} className='w-20 h-20 pl-2' />
                <div className='flex lg:text-3xl sm:text-xl justify-center text-gray-900 drop-shadow-lg'>۳۰ سال سابقه</div>
            </div>
            <div className='flex items-center mb-4 ml-14'>
                <img src={roadIcon} className='w-20 h-20 pl-2' />
                <div className='flex lg:text-3xl sm:text-xl justify-center text-gray-900'>۱۰ پروژه موفق</div>
            </div>
            <div className='flex items-center mb-4'>
                <img src={machineIcon} className='w-20 h-20 pl-2' />
                <div className='flex lg:text-3xl sm:text-xl justify-center text-gray-900'>۵۰ دستگاه ماشین آلات</div>
            </div>
        </div>
    )
}

export default Introduction