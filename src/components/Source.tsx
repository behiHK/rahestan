import { Link } from 'gatsby'
import React from 'react'
import machine from '../images/construction-machine.jpg'
import workers from '../images/workers2.jpg'

const Source = () => {
   return (
    <>
      <div className="flex flex-wrap flex-col lg:flex-row-reverse justify-items-stretch x-full text-white text-right lg:h-[50vh] bg-white leading-loose">
            <img src={machine} className='h-full w-full lg:w-1/2' />
            <div className='w-full lg:w-1/2 h-auto lg:h-full px-2 lg:px-40 py-6 bg-gray-500 text-white'>
                <p className='text-2xl py-4'>ماشین آلات و تجهیزات</p>
                <p >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
       </div>
       <div className="flex flex-col lg:flex-row justify-items-stretch x-full text-right lg:h-[50vh] bg-white leading-loose">
            <img src={workers} className='h-full w-full lg:w-1/2' />
            <div className='w-full lg:w-1/2 h-auto lg:h-full px-2 lg:px-40 py-6 bg-white text-gray-500'>
                <p className='text-2xl py-4'>مدیریت و نیروی انسانی</p>
                <p >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
       </div>
       </>
   )
}

export default Source