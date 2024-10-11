import React from 'react'
import image1 from "../images/asphalt1.jpeg"
import image2 from "../images/asphalt2.jpeg"
import image3 from "../images/asphalt3.jpeg"
import image4 from "../images/asphalt4.jpg"
import image5 from "../images/asphalt5.jpg"
import image6 from "../images/asphalt6.jpg"
import image7 from "../images/asphalt7.jpg"
import image8 from "../images/refinery.jpeg"
import image9 from "../images/refinery1.jpeg"
import { useIntl } from 'gatsby-plugin-intl'

const IndustryProjects = () => {
    const intl = useIntl()
    return (
        <div className={`bg-white w-full ${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>
            <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'>{intl.formatMessage({ id: "QeshmProject1" })}</p>
            <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-3 gap-0 place-items-stretch'>
                <img src={image1} className='col-start-1' />
                <img src={image2} className='col-start-2' />
                <img src={image6} className='col-start-3 row-span-2' />
                <img src={image4} className='col-start-1' />
                <img src={image5} className='col-start-2' />
                <img src={image7} className='col-start-2' />
                <img src={image3} className='col-start-3' />
            </div>
            <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'>{intl.formatMessage({ id: "DamghanProject" })} </p>
            <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-1 gap-0 place-items-stretch'>
                <img src={image8} className='col-start-2' />
                <img src={image9} className='col-start-3' />
            </div>
        </div>
    )
}

export default IndustryProjects