import { Link } from 'gatsby';
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ProjectCard from './ProjectCard';
import BuildingImage from "../images/building.jpg"
import RoadImage from "../images/road.jpeg"
import IndustryImage from "../images/asphalt.jpeg"
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
    // const slideImages = [
    //     {
    //       url: 'https://www.nps.gov/articles/images/IMG_2588.jpg',
    //       caption: 'پروژه سازمان حج و زیارت تهران'
    //     },
    //     {
    //       url: 'https://mn.gov/admin/assets/Admin4000k--8SM_tcm36-484850.jpg',
    //       caption: 'پروژه مجتمع اقامتی رفاهی میلاد جم'
    //     },
    //     {
    //       url: 'https://voiceofoc.org/wp-content/uploads/2021/01/AsphaltFactory.2021.01-EDIT-12.jpg',
    //       caption: 'پروژه کارخانه آسفالت قشم'
    //     },
    //   ]; 

   return (
    // bg-gray-500 
    <div className='bg-white w-full '>
        <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 pt-10'>پروژه های انجام شده</p>
        <p className='text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 text-right px-20 py-10'>
        ما در شرکت رهستان با سابقه‌ای درخشان در زمینه‌های راهسازی و ساختمان‌سازی، مفتخریم که پروژه‌های متعددی را با موفقیت به اتمام رسانده‌ایم. تخصص و تجربه تیم مجرب ما در کنار تعهد به کیفیت و ایمنی، پشتوانه محکمی برای ارائه خدمات متنوع به شماست.
        <br/>
        از جمله پروژه‌های شاخص ما می‌توان به قطعه دوم و سوم بزرگراه خلیج فارس اشاره کرد که علی رغم انتظارات ۳۶ ماه زمان مورد نیاز، پروژه با ایده‌آل‌ترین کیفیت در زمان ۲۴ ماه به اتمام رسید.
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

      <ProjectCard img={IndustryImage} title='صنعت' caption= 'اجرای تاسیسات و کارخانجات' link={"/industry-projects"} />
      <ProjectCard img ={RoadImage} caption= 'احداث جاده و بزرگراه' title= "راهسازی" link={"/roadway-projects"} />
      <ProjectCard img={BuildingImage} caption='ساخت ساختمان های اداری و اقامتی' title= "ساختمان سازی" link={"/building-projects"} />
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