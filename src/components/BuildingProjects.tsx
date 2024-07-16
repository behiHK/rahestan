import React from 'react'
import image1 from "../images/zist1.jpg"
import image2 from "../images/zist2.jpg"
import image3 from "../images/zist3.jpg"
import image4 from "../images/zist4.jpg"
import image5 from "../images/zist5.jpg"
import image6 from "../images/milad1.jpg"
import image7 from "../images/milad2.jpg"
import image8 from "../images/milad3.jpg"
import image9 from "../images/milad4.jpg"
import image10 from "../images/milad5.jpg"
import image11 from "../images/haj1.jpg"
import image12 from "../images/haj2.jpg"
import image13 from "../images/haj4.jpg"
import image14 from "../images/kang1.jpg"
import image15 from "../images/kang2.jpg"
import image16 from "../images/kang3.jpg"
import image17 from "../images/kang4.jpg"
import image18 from "../images/kang6.jpg"
import image19 from "../images/kang7.jpg"
import image20 from "../images/kang5.jpg"
import image21 from "../images/saba1.jpeg"
import image22 from "../images/saba2.jpeg"
import image23 from "../images/building.jpeg"
import image24 from "../images/foolad1.jpeg"
import { useIntl } from 'gatsby-plugin-intl'


const BuildingProjects = () => {
    const intl = useIntl()
   return (
    <div className={`bg-white w-full ${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>
        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'> {intl.formatMessage({id: "KhalijFarsProject4"})}</p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-2 gap-0 place-items-stretch'>
            <img src={image1} className='col-start-1'/>
            <img src={image5} className='col-start-2'/>
            <img src={image2} className='col-start-3'/>
            <img src={image4} className='col-start-1'/>
            <img src={image3} className='col-start-2'/>
        </div>
        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'> {intl.formatMessage({id: "MiladJamProject"})}</p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-4 md:grid-rows-2 gap-0 place-items-stretch'>
            <img src={image8} className='col-start-1'/>
            <img src={image6} className='col-start-2 row-span-2 col-span-2'/>
            <img src={image7} className='col-start-4'/>
            <img src={image9} className='col-start-1'/>
            <img src={image10} className='col-start-4'/>
        </div>
        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'>{intl.formatMessage({id: "KanganProject2"})}</p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-4 gap-0 place-items-stretch'>
            <img src={image14} className='col-start-1 row-span-2'/>
            <img src={image15} className='col-start-2 row-span-2'/>
            <img src={image16} className='col-start-3 row-span-2'/>
            <img src={image17} className='col-start-1 row-span-2'/>
            <img src={image20} className='col-start-2 row-span-2'/>
            <img src={image18} className='col-start-3'/>
            <img src={image19} className='col-start-3'/>
        </div>

        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'> {intl.formatMessage({id: "SabaProject"})}</p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-2 md:grid-rows-1 gap-0 place-items-stretch'>
            <img src={image21} className='col-start-1'/>
            <img src={image22} className='col-start-2'/>
        </div>

        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'> {intl.formatMessage({id: "TehranProject"})}</p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-1 gap-0 place-items-stretch'>
            <img src={image11} className='col-start-1'/>
            <img src={image12} className='col-start-2'/>
            <img src={image13} className='col-start-3'/>
        </div>

        <p className='text-2xl lg:text-3xl text-gray-500 px-5 py-5 lg:px-10 lg:py-10'> {intl.formatMessage({id: "MobarakeProject"})}</p>
        <div className='flex flex-col md:grid md:gap-2 md:grid-cols-2 md:grid-rows-1 gap-0 place-items-stretch'>
            <img src={image23} className='col-start-1'/>
            <img src={image24} className='col-start-2'/>
        </div>
    </div>
   )
}

export default BuildingProjects