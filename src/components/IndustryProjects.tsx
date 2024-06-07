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
import image10 from "../images/kangan1.jpeg"
import image11 from "../images/kangan2.jpeg"
import image12 from "../images/kangan3.jpeg"
import image13 from "../images/kangan4.jpeg"
import image14 from "../images/kangan5.jpeg"
import image15 from "../images/kangan6.jpeg"
import image16 from "../images/kangan7.jpeg"

const IndustryProjects = () => {

   return (
    <div className='bg-white w-full py-10'>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'>کارخانه آسفالت قشم</p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-3 gap-0 place-items-stretch'>
            <img src={image1} className='col-start-1'/>
            <img src={image2} className='col-start-2'/>
            <img src={image6} className='col-start-3 row-span-2'/>
            <img src={image4} className='col-start-1'/>
            <img src={image5} className='col-start-2'/>
            <img src={image7} className='col-start-2'/>
            <img src={image3} className='col-start-3'/>
        </div>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'>تصفیه خانه لاگون فاضلاب شهر دامغان</p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-1 gap-0 place-items-stretch'>
            <img src={image8} className='col-start-2'/>
            <img src={image9} className='col-start-3'/>
        </div>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'>خط انتقال گاز چاههای ۳۱ و ۳۲ کنگان</p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-3 gap-0 place-items-stretch'>
            <img src={image16} className='col-start-1'/>
            <img src={image11} className='col-start-2'/>
            <img src={image12} className='col-start-3'/>
            <img src={image13} className='col-start-1'/>
            <img src={image15} className='col-start-2 row-span-2'/>
            <img src={image14} className='col-start-3'/>
            <img src={image10} className='col-start-1'/>
        </div>
    </div>
   )
}

export default IndustryProjects