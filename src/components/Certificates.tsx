import image6 from "../images/image6.jpeg"
import image7 from "../images/image7.jpeg"
import image8 from "../images/image8.jpeg"
import image9 from "../images/image9.jpeg"
import image10 from "../images/image10.jpg"
import image11 from "../images/certificate1.jpeg"
import image12 from "../images/certificate2.jpg"
import React from 'react'
import { useIntl } from "gatsby-plugin-intl"

const Certificates = () => {
    const intl = useIntl()
    return (
        <div className={`w-full min-h-[60vh] ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
             <p className='text-2xl lg:text-3xl text-gray-500 px-10 py-10'> {intl.formatMessage({id: "certificates"})}</p>
            <div className='flex flex-col md:grid md:gap-0 md:grid-cols-4 md:grid-rows-1 md:gap-4 place-items-stretch mb-20'>
                <img src={image12} className='col-start-2'/>
                <img src={image11} className='col-start-3'/>
            </div>

            <p className='text-2xl lg:text-3xl text-gray-500 px-10 py-10'> {intl.formatMessage({id: "appreciations"})}</p>
            <div className='flex flex-col md:grid md:gap-0 md:grid-cols-4 md:grid-rows-2 md:gap-4 place-items-stretch'>
                <img src={image6}  className='col-start-1'/>
                <img src={image7} className='col-start-2'/>
                <img src={image8} className='col-start-3'/>
                <img src={image10} className='col-start-4'/>
                <img src={image9} className='col-start-2 col-span-2'/>
            </div>
        </div> 
    )
}

export default Certificates