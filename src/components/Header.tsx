import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
   return (
        <header className="text-white text-center h-[80vh] bg-black bg-opacity-40 flex justify-end pr-4 lg:pr-40">
      {/* <div className="h-full bg-no-repeat bg-cover bg-[url('../images/construction.jpg')] bg-fixed"> */}
            <div className='flex flex-col justify-center items-end text-center h-full w-full'>
                    <h1 className='font-bold lg:text-7xl sm:text-6xl text-4xl text-white text-opacity-100 pb-4'>رهستان</h1>
                    <p className="lg:text-2xl sm:text-xl text-l text-right text-white text-opacity-70 pb-8 border-solid border-white border-r-4 pr-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    <br/>
                    و با استفاده از طراحان گرافیک است
                    </p>
                    <div className='flex flex-row justify-end mt-10'>
                        <div className='lg:text-2xl sm:text-l text-l bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-700 px-6 py-4 rounded-full mx-2'><Link to="our-expertise">تخصص ما</Link></div>
                        <div className='lg:text-2xl sm:text-l text-l bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full mx-2'><Link to="/" >پروژه های انجام شده</Link></div>
                    </div>
                {/* </div> */}
            </div>
        </header>
   )
}

export default Header