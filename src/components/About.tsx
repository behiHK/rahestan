import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'

const About = () => {
    const intl = useIntl()
    return (
        <div className={`w-full min-h-[60vh] ${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"} `}>
            <p className='text-2xl lg:text-3xl text-gray-500  px-10 pt-10'>
            {intl.formatMessage({id: "companyHistory"})}
            </p>
            <p className='text-l leading-loose lg:text-xl lg:leading-loose text-gray-500  px-10 py-5 lg:px-20 lg:py-10'>
           {intl.formatMessage({id: "historyPart1"})}
            <br />
           {intl.formatMessage({id: "historyPart2"})}
            <br />
            {intl.formatMessage({id: "historyPart3"})}
            <br />
            {intl.formatMessage({id: "historyPart4"})}
           </p>
           <p className='text-2xl lg:text-3xl text-gray-500  px-10 pt-5 lg:pt-10'>  {intl.formatMessage({id: "visionTitle"})}</p>
           <p className='text-l leading-loose lg:text-xl lg:leading-loose text-gray-500  px-10 py-5 lg:px-20 lg:py-10'>
                {intl.formatMessage({id: "vision"})}
           </p>
        </div>

        
    )
}

export default About