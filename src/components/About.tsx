import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'
import image from "../images/aboutus.jpg"

const About = () => {
    const intl = useIntl()
    return (
        <div className={`w-full h-full ${intl.locale === "fa" ? "rtl" : "ltr"} text-justify p-2 lg:p-10`}>
            <div className={`w-full flex flex-col lg:flex-row items-center justify-center`}>
                <div className='bg-white pb-4 lg:w-2/3'>
                    <p className={`text-2xl lg:text-3xl text-gray-500 border-solid border-violet-200 ${intl.locale === "fa" ? "border-r-4" : "border-l-4"}  px-4 py-4  mx-4 lg:mx-16`}>
                        {intl.formatMessage({ id: "companyHistory" })}
                    </p>
                    <p className='text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 py-5 px-4 lg:px-16'>
                        {intl.formatMessage({ id: "historyPart1" })}
                        <br />
                        {intl.formatMessage({ id: "historyPart2" })}
                        <br />
                        {intl.formatMessage({ id: "historyPart3" })}
                        <br />
                        {intl.formatMessage({ id: "historyPart4" })}
                    </p>
                </div>
                <div className={`w-full lg:w-1/3`}>
                    <img src={image} className='w-full h-full object-cover' />
                </div>
            </div>

            <div className='bg-white pt-4'>
                <p className={`text-2xl lg:text-3xl text-gray-500  border-solid border-violet-200 ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} px-4 py-4 mx-4 lg:mx-16 `}>  {intl.formatMessage({ id: "visionTitle" })}</p>
                <p className='text-l leading-loose lg:text-xl lg:leading-loose text-gray-500  px-4 py-5 lg:px-16'>
                    {intl.formatMessage({ id: "vision" })}
                </p>
            </div>
        </div>


    )
}

export default About