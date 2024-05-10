import { Link } from 'gatsby';
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ProjectCard from './ProjectCard';
import BuildingImage from "../images/office1.jpg"
import RoadImage from "../images/road3.jpg"
import IndustryImage from "../images/asphalt.jpg"
import ImageSlider from './Slider';

const Projects = () => {
      
      const divStyle = {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'end',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '70vh',
      }
    const slideImages = [
        {
          url: 'https://www.nps.gov/articles/images/IMG_2588.jpg',
          caption: 'پروژه سازمان حج و زیارت تهران'
        },
        {
          url: 'https://mn.gov/admin/assets/Admin4000k--8SM_tcm36-484850.jpg',
          caption: 'پروژه مجتمع اقامتی رفاهی میلاد جم'
        },
        {
          url: 'https://voiceofoc.org/wp-content/uploads/2021/01/AsphaltFactory.2021.01-EDIT-12.jpg',
          caption: 'پروژه کارخانه آسفالت قشم'
        },
      ]; 

   return (
    // bg-gray-500 
    <div className='bg-white w-full '>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 pt-10'>پروژه های انجام شده</p>
        <p className='text-l lg:text-xl text-gray-500 text-right px-10 leading-4 py-10'>
        شرکت فنی مهندسی رهستان یک پیمانکار خدمات کامل و پیشرو در صنعت است که با افراد، تخصص و توان مالی برای اجرای و تحویل پروژه های بزرگ و کوچک با موفقیت انجام می شود. ما شهرت خود را به عنوان یکی از مجرب ترین و با کیفیت ترین پیمانکاران در ایران با بیش از ۲۰ سال خدمات در صنعت ساخت و ساز عمرانی به دست آورده ایم
        </p>
        <div className='flex flex-col lg:flex-row '>
      {/* <div className='w-full bg-white py-10 mx-2'> 
            <Slide>
         {slideImages.map((slideImage, index)=> (
            // <div  className=''>
              <div key={index} style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <p className='px-4 lg:px-8 mb-8 text-right text-gray-700 mx-10 lg:mx-20 text-xl  border-solid border-white border-r-2'>{slideImage.caption}</p>
                <div className='bg-red-500 hover:bg-red-600 text-white px-6 py-4 mx-10 lg:mx-20  rounded-full hover:text-opacity-80'><Link to="/" >اطلاعات بیشتر</Link></div>
              </div>
            // </div>
          ))} 
        </Slide>
       </div> */}

      <ProjectCard img={BuildingImage} caption='ساخت بیش از ۲۰ ساختمان اداری' title= "ساختمان سازی"  />
      <ProjectCard img ={RoadImage} caption= 'ساخت بیش از ۱۰۰۰ کیلومتر از راههای کشور' title= "راهسازی" />
      <ProjectCard img={IndustryImage} title='صنعت' caption= 'اجرای تاسیسات و کارخانجات' />
       </div>
       {/* <ImageSlider images={
        [
          {
            url: 'https://www.nps.gov/articles/images/IMG_2588.jpg',
            caption: 'ساخت بیش از ۱۰۰۰ کیلومتر از راههای کشور',
            title: "راهسازی"
          },
          {
            url: 'https://mn.gov/admin/assets/Admin4000k--8SM_tcm36-484850.jpg',
            title: "ساختمان سازی",
            caption: 'ساخت بیش از ۲۰ ساختمان اداری'
          },
          {
            url: 'https://voiceofoc.org/wp-content/uploads/2021/01/AsphaltFactory.2021.01-EDIT-12.jpg',
            title: "صنعت",
            caption: 'اجرای تاسیسات و کارخانجات'
          },
          {
            url: 'https://mn.gov/admin/assets/Admin4000k--8SM_tcm36-484850.jpg',
            title: "ساختمان سازی",
            caption: 'ساخت بیش از ۲۰ ساختمان اداری'
          },
        ]
       } /> */}
       </div>
   )
}

export default Projects