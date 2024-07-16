import React from 'react'
import image1 from "../images/khartang4.jpg"
import image2 from "../images/khartang5.jpg"
import image3 from "../images/khartang6.jpg"
import image4 from "../images/khartang7.jpg"
import image5 from "../images/khartang8.jpg"
import image6 from "../images/khartang9.jpg"
import image7 from "../images/khartang10.jpg"

import image10 from "../images/kangan1.jpeg"
import image11 from "../images/kangan2.jpeg"
import image12 from "../images/kangan3.jpeg"
import image13 from "../images/kangan4.jpeg"
import image14 from "../images/kangan5.jpeg"
import image15 from "../images/kangan6.jpeg"
import image16 from "../images/kangan7.jpeg"
import { useIntl } from 'gatsby-plugin-intl'

const OilProjects = () => {
    const intl = useIntl()
   return (
    <div className={`bg-white w-full ${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>
        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'>{intl.formatMessage({id: "KanganProject"})} </p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-3 gap-0 place-items-stretch'>
            <img src={image16} className='col-start-1'/>
            <img src={image11} className='col-start-2'/>
            <img src={image12} className='col-start-3'/>
            <img src={image13} className='col-start-1'/>
            <img src={image15} className='col-start-2 row-span-2'/>
            <img src={image14} className='col-start-3'/>
            <img src={image10} className='col-start-1'/>
        </div>
        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'>{intl.formatMessage({id: "KhartangProject"})} </p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-5 md:grid-rows-3 place-items-stretch'>
            <img src={image2} className='col-start-1 max-h-[80vh]'/>
            <img src={image7} className='col-start-2 col-span-3 max-h-[80vh]'/>
            <img src={image3} className='col-start-5 max-h-[80vh]'/>
            <img src={image4} className='col-start-1 max-h-[80vh]'/>
            <img src={image5} className='col-start-2 col-span-4 max-h-[80vh]'/>
            <img src={image1} className='col-start-1 col-span-3 max-h-[80vh]'/>
            <img src={image6} className='col-start-4 max-h-[80vh]'/>
        </div>
    </div>
   )
}

export default OilProjects