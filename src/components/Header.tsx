import { Link } from "gatsby-plugin-intl"
import React from 'react'
import RahestanIcon from "../images/rahestantitle.svg"
import RahestanIconEN from "../images/rahestantitle-en.svg"
import videoSource from "../assets/rahestan.mp4"
import Introduction from './Introduction'
import { useIntl } from 'gatsby-plugin-intl';

const Header = () => {
    const intl = useIntl()
   return (
<div className='relative w-full'>
            <video autoPlay loop muted playsInline className='w-full h-[90vh] lg:h-[60vh] object-cover'  >
                <source src={videoSource}  type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`absolute bottom-0 top-0 left-0 right-0 m-auto w-full`}>
            <div className={`flex flex-col justify-center ${intl.locale === "fa" ? 'items-start pr-2 lg:pr-20' : 'items-end pl-2 lg:pl-20'} text-center h-full w-full`}>
                <img src={intl.locale === "fa" ?  RahestanIcon : RahestanIconEN} className={`min-w-[18rem] ${intl.locale === "fa" ? "w-[20rem] lg:w-[20rem]" : "w-[23rem] lg:w-[35rem]"}  mb-6`}/>
                    <p className={`lg:text-2xl sm:text-xl text-l text-white  pb-8 border-solid border-white ${intl.locale === "fa" ? "border-r-4 text-right rtl" : "border-l-4 text-left ltr"} px-8`}>
                  {intl.formatMessage({ id: "companySlogan" })}                  
                     </p>
                    <div className='flex flex-row justify-end mt-10'>
                        <div className='lg:text-2xl sm:text-l text-l bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-700 px-6 py-4 rounded-full mx-2'>
                            <Link to="/about"> 
                            {intl.formatMessage({ id: "aboutUs" })}
                            </Link>
                        </div>
                        <div className='lg:text-2xl sm:text-l text-l bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-full mx-2'>
                            <Link to="/projects" >
                            {intl.formatMessage({id: "completedProjects"})} 
                            </Link>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        // </header>
   )
}

export default Header