import { Link } from 'gatsby'
import React from 'react'
import RahestanIcon from "../images/rahestantitle.svg"

const Header = () => {
   return (
        <header className="text-white text-center h-[80vh] bg-black bg-opacity-40 flex justify-end pr-4 lg:pr-40 md:pr-20">
      {/* <div className="h-full bg-no-repeat bg-cover bg-[url('../images/construction.jpg')] bg-fixed"> */}
            <div className='flex flex-col justify-center items-start text-center h-full w-full'>
                <img src={RahestanIcon} className='min-w-[18rem] max-w-[20rem]  mb-6 ml-6'/>
                    <p className="lg:text-2xl sm:text-xl text-l text-right text-white text-opacity-70 pb-8 border-solid border-white border-r-4 pr-8">
                    با راه‌های امن، سازه‌های پایدار و با تجربه در ساخت متعهد به آبادانی هستیم                   
                     </p>
                    <div className='flex flex-row justify-end mt-10'>
                        <div className='lg:text-2xl sm:text-l text-l bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-700 px-6 py-4 rounded-full mx-2'><Link to="about">درباره ما</Link></div>
                        <div className='lg:text-2xl sm:text-l text-l bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full mx-2'><Link to="/projects" >پروژه های انجام شده</Link></div>
                    </div>
                {/* </div> */}
            </div>
        </header>
   )
}

export default Header