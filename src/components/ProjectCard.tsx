import { Link } from 'gatsby'
import React from 'react'

const ProjectCard = ({ img, caption, title, link }) => {
    return (
        <div className={`w-full lg:w-1/3 h-[50vh] bg-no-repeat bg-cover mx-2 my-12 cursor-pointer`} style={{ backgroundImage: `url(${img})` }}>
            <div className='w-full h-full bg-red-400 bg-opacity-50 hover:bg-opacity-0 hover:bg-transparent flex flex-col items-start justify-end'>
                <p className='px-4 lg:px-6 mb-4 text-right text-gray-700 mx-10 lg:mx-20 text-xl text-white border-solid border-white border-r-2'>{caption}</p>
                <div className='bg-red-400 hover:bg-red-500 text-white px-6 py-4 mx-10 lg:mx-20 mb-5 rounded-full hover:text-opacity-80 w-48 text-center'><Link to={link} >{title}</Link></div>
            </div>
        </div>

        // <div className={`w-full h-full my-12 cursor-pointer flex flex-col`} >
        //     <img src={img}  className='w-full h-2/3' />
        //         <div className='text-gray-900 bg-white py-4 px-10 lg:px-20 text-right h-1/3'>
        //             <p>
        //                 {caption}
        //             </p>
        //             <Link to="/" >{title}</Link>
        //             </div>
        // </div>
    )
}

export default ProjectCard