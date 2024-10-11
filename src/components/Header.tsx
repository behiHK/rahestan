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
            <video autoPlay loop muted playsInline className='w-full h-[90vh] lg:h-[83vh] object-cover'  >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`absolute bottom-0 top-0 left-0 right-0 m-auto w-full bg-gray-900 bg-opacity-40`}>
                <div className={`flex flex-col justify-center ${intl.locale === "fa" ? 'items-start pr-8 lg:pr-20' : 'items-end pl-8 lg:pl-20'} text-center h-full w-full`}>
                    {/* <div className={`min-w-[18rem] ${intl.locale === "fa" ? "w-[20rem] lg:w-[20rem]" : "w-[23rem] lg:w-[35rem]"}  mb-6 bg-gray-900 bg-opacity-30`}>
                        <img src={intl.locale === "fa" ? RahestanIcon : RahestanIconEN} className="w-full" />
                    </div> */}
                    {/* <p className={`${intl.locale === "fa" ? "rtl" : "ltr"} text-9xl text-red-500  p-8 font-bold mb-6`}>{intl.formatMessage({ id: "companyName" })}</p> */}
                    <p className={`lg:text-3xl sm:text-2xl text-l text-zinc-200  pb-8 border-solid border-white ${intl.locale === "fa" ? "border-r-4 text-right rtl" : "border-l-4 text-left ltr"} px-8`}>
                        {intl.formatMessage({ id: "companySlogan1" })}
                    </p>
                    <p className={`lg:text-5xl sm:text-3xl text-lx text-zinc-100  pb-8 border-solid border-white ${intl.locale === "fa" ? "border-r-4 text-right rtl" : "border-l-4 text-left ltr"} px-8`}>
                        {intl.formatMessage({ id: "companySlogan2" })}
                    </p>
                    <div className='flex flex-row justify-end mt-10'>
                        <div className='lg:text-2xl sm:text-l text-l bg-white bg-opacity-50 hover:bg-opacity-70 text-gray-700 px-6 py-4 rounded-full mx-2  hover:shadow-inner hover:shadow-white'>
                            <Link to="/about">
                                {intl.formatMessage({ id: "aboutUs" })}
                            </Link>
                        </div>
                        <div className='lg:text-2xl sm:text-l text-l bg-violet-200 hover:bg-violet-300  text-zinc-100 hover:text-white px-6 py-4 rounded-full mx-2  hover:shadow-inner hover:shadow-violet-0'>
                            <Link to="/projects" >
                                {intl.formatMessage({ id: "completedProjects" })}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

// version 3
{/* <header className="w-full h-[92vh]">
<div className={`flex flex-col justify-center items-start pr-2 lg:pr-20 h-full w-full`}>

    <div className={`text-zinc-100 flex flex-col justify-center items-center bg-black bg-opacity-80 w-5/12 h-4/6 ${intl.locale === "fa" ? "rtl" : "ltr"} px-8`}>
        <p className={`lg:text-2xl sm:text-xl text-l`}>
            {intl.formatMessage({ id: "companySlogan1" })}
        </p>
        <br />
        <p className={`lg:text-5xl sm:text-3xl text-2xl`}>
            {intl.formatMessage({ id: "companySlogan2" })}
        </p>
        <div className='flex flex-row justify-end mt-10'>
            <div className='lg:text-xl sm:text-l text-l bg-transparent hover:text-zinc-100 hover:border-zinc-100 border-zinc-200 border-2 px-6 py-2 mx-2 text-zinc-200'>
                <Link className="m-0 p-0" to="/about">
                    {intl.formatMessage({ id: "aboutUs" })}
                </Link>
            </div>
            <div className='lg:text-xl sm:text-l text-l bg-transparent hover:text-zinc-100 hover:border-zinc-100 border-zinc-200 border-2 text-zinc-200 px-6 py-2 mx-2'>
                <Link to="/projects" >
                    {intl.formatMessage({ id: "completedProjects" })}
                </Link>
            </div>
        </div>

    </div>
</div>
</header> */}

//version 3
{/* <header className="w-full text-center h-[92vh]  flex justify-end">
<div className={`flex flex-col justify-center ${intl.locale === "fa" ? 'items-start pr-2 lg:pr-20' : 'items-end pl-2 lg:pl-20'} text-center h-full w-full`}>
    <img src={intl.locale === "fa" ? RahestanIcon : RahestanIconEN} className={`min-w-[18rem] ${intl.locale === "fa" ? "w-[20rem] lg:w-[20rem]" : "w-[23rem] lg:w-[35rem]"}  mb-6`} />
    <div className={`text-white  border-solid border-orange-200 ${intl.locale === "fa" ? "border-r-4 text-right rtl" : "border-l-4 text-left ltr"} px-8`}>
        <p className={`lg:text-2xl sm:text-xl text-l`}>
            {intl.formatMessage({ id: "companySlogan1" })}
        </p>
        <br />
        <p className={`lg:text-5xl sm:text-3xl text-2xl`}>
            {intl.formatMessage({ id: "companySlogan2" })}
        </p>
    </div>
    <div className='flex flex-row justify-end mt-10'>
        <div className='lg:text-xl sm:text-l text-l bg-transparent hover:text-zinc-100 hover:border-zinc-100 border-zinc-200 border-2 px-6 py-2 mx-2 text-zinc-200'>
            <Link className="m-0 p-0" to="/about">
                {intl.formatMessage({ id: "aboutUs" })}
            </Link>
        </div>
        <div className='lg:text-xl sm:text-l text-l bg-transparent hover:text-zinc-100 hover:border-zinc-100 border-zinc-200 border-2 text-zinc-200 px-6 py-2 mx-2'>
            <Link to="/projects" >
                {intl.formatMessage({ id: "completedProjects" })}
            </Link>
        </div>
    </div>
</div>
</header> */}
//version 2
{/* <header className="w-full text-center h-[92vh]  flex justify-end">
<div className={`flex flex-col justify-center ${intl.locale === "fa" ? 'items-start pr-2 lg:pr-20' : 'items-end pl-2 lg:pl-20'} text-center h-full w-full`}>
    <img src={intl.locale === "fa" ? RahestanIcon : RahestanIconEN} className={`min-w-[18rem] ${intl.locale === "fa" ? "w-[20rem] lg:w-[20rem]" : "w-[23rem] lg:w-[35rem]"}  mb-6`} />
    <div className={`text-white  border-solid border-orange-200 ${intl.locale === "fa" ? "border-r-4 text-right rtl" : "border-l-4 text-left ltr"} px-8`}>
        <p className={`lg:text-2xl sm:text-xl text-l`}>
            {intl.formatMessage({ id: "companySlogan1" })}
        </p>
        <br />
        <p className={`lg:text-5xl sm:text-3xl text-2xl`}>
            {intl.formatMessage({ id: "companySlogan2" })}
        </p>
    </div>
    <div className='flex flex-row justify-end mt-10'>
        <div className='lg:text-xl sm:text-l text-l bg-transparent hover:text-zinc-100 hover:border-zinc-100 border-zinc-200 border-2 px-6 py-2 mx-2 text-zinc-200'>
            <Link className="m-0 p-0" to="/about">
                {intl.formatMessage({ id: "aboutUs" })}
            </Link>
        </div>
        <div className='lg:text-xl sm:text-l text-l bg-transparent hover:text-zinc-100 hover:border-zinc-100 border-zinc-200 border-2 text-zinc-200 px-6 py-2 mx-2'>
            <Link to="/projects" >
                {intl.formatMessage({ id: "completedProjects" })}
            </Link>
        </div>
    </div>
</div>
</header> */}

// version 1
{/* <div className='relative w-full'>
            <video autoPlay loop muted playsInline className='w-full h-[90vh] lg:h-[80vh] object-cover'  >
                <source src={videoSource}  type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`absolute bottom-0 top-0 left-0 right-0 m-auto w-full bg-gray-600 bg-opacity-40`}>
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
            </div> */}