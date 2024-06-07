import React from 'react'
import image1 from "../images/khalij1-1.jpg"
import image2 from "../images/khalij1-2.jpg"
import image3 from "../images/khalij1-3.jpg"
import image4 from "../images/khalij1-4.jpg"
import image5 from "../images/khalij1-5.jpg"
import image6 from "../images/khalij1-6.jpg"
import image7 from "../images/khalij1-7.jpg"
import image8 from "../images/khalij1-8.jpg"
import image9 from "../images/khalij1-9.jpg"
import image10 from "../images/khalij2-1.jpg"
import image11 from "../images/khalij2-2.jpg"
import image12 from "../images/khalij2-3.jpg"
import image13 from "../images/khalij2-4.jpg"
import image14 from "../images/khalij2-5.jpg"
import image15 from "../images/khalij2-6.jpg"
import image16 from "../images/khalij2-7.jpg"
import image17 from "../images/khalij2-8.jpg"
import image18 from "../images/source1.jpg"
import image19 from "../images/source2.jpg"
import image20 from "../images/source3.jpg"
import image21 from "../images/source4.jpg"
import image22 from "../images/source5.jpg"
import image23 from "../images/site1.jpg"
import image24 from "../images/site2.jpg"
import image25 from "../images/site3.jpg"
import image26 from "../images/site4.jpg"
import image27 from "../images/site5.jpg"
import image28 from "../images/sistan1.jpg"
import image29 from "../images/sistan2.jpg"
import image30 from "../images/sistan3.jpg"
import image31 from "../images/sistan4.jpg"
import image32 from "../images/sistan5.jpg"
import image33 from "../images/sistan6.jpg"

const RoadwayProjects = () => {

   return (
    <div className='bg-white w-full py-10'>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'> قطعه دوم بزرگراه خلیج فارس </p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-4 md:gap-0 place-items-stretch'>
            <img src={image1} className='col-start-1 row-span-2'/>
            <img src={image2} className='col-start-2'/>
            <img src={image6} className='col-start-3'/>
            <img src={image4} className='col-start-2'/>
            <img src={image8} className='col-start-3'/>
            <img src={image7} className='col-start-1'/>
            <img src={image3} className='col-start-2'/>
            <img src={image5} className='col-start-3'/>
            <img src={image9} className='col-start-1'/>
        </div>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'> قطعه سوم بزرگراه خلیج فارس </p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-1 gap-0 place-items-stretch'>
        <img src={image10} className='col-start-1 row-span-2'/>
            <img src={image11} className='col-start-2'/>
            <img src={image12} className='col-start-3'/>
            <img src={image13} className='col-start-2'/>
            <img src={image14} className='col-start-3'/>
            <img src={image15} className='col-start-1'/>
            <img src={image16} className='col-start-2'/>
            <img src={image17} className='col-start-3'/>
        </div>

        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'> جاده دسترسی به منابع آب</p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-2 gap-0 place-items-stretch'>
            <img src={image18} className='col-start-1'/>
            <img src={image20} className='col-start-2'/>
            <img src={image21} className='col-start-3'/>
            <img src={image22} className='col-start-1'/>
            <img src={image19} className='col-start-2'/>
        </div>

        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'> خیابان های سایت سیاحتی قشم</p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-2 gap-0 place-items-stretch'>
            <img src={image23} className='col-start-1'/>
            <img src={image24} className='col-start-2 row-span-2'/>
            <img src={image25} className='col-start-3'/>
            <img src={image26} className='col-start-1'/>
            <img src={image27} className='col-start-3'/>
        </div>

        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 py-10'> بلوار حافظ - سیستان - ساحل جنوبی</p>
        <div className='flex flex-col md:grid md:gap-0 md:grid-cols-3 md:grid-rows-2 gap-0 place-items-stretch'>
            <img src={image28} className='col-start-1'/>
            <img src={image29} className='col-start-2'/>
            <img src={image30} className='col-start-3'/>
            <img src={image31} className='col-start-1'/>
            <img src={image32} className='col-start-2'/>
            <img src={image33} className='col-start-3'/>
        </div>
    </div>
   )
}

export default RoadwayProjects