import React, { useEffect, useState, } from 'react'
import {Link, withPrefix} from 'gatsby'
import logo from "../images/rahestan-logo.jpg"
import ReactPageScroller from 'react-page-scroller';

const Layout = ({children, location}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
    const linkStyle = `
        hover:bg-red-500
        text-lg
        sm:text-lg
        h-full
        flex
        items-center
        justify-center
        w-40
        ${isScrolled && 'hover:text-white '}
   `
   const activeStyle=`
   text-white
        ${isOpened ? "" : "bg-red-500"}
   `
    return (
        <div >
            <div className='flex justify-start lg:px-20 sm:px-6 h-[12vh]'>
            <Link to="/"><img src={logo} className="cursor-pointer mx-0 my-0 x-auto h-full" /></Link>

            </div>
            <nav className={`sticky top-0 z-50 px-4 h-[8vh] transition-all duration-150 ease-in  ${isScrolled ? "grid gap-0 grid-cols-3 grid-rows-1 text-gray-900 bg-white border-solid border-gray-900 border-b-4 lg:px-10 sm:px-4" : "flex justify-center text-white bg-gray-900 lg:px-20 sm:px-6"} shadow-lg` }>
            { isScrolled && <div className='flex col-span-1 h-full'><Link to="/"><img src={logo} className="cursor-pointer mx-0 my-0 h-full" /></Link></div>}
        { isOpened &&
         <section className="flex flex-col fixed top-0 right-0 w-4/5 h-full bg-gray-600 lg:hidden z-10">
         <div className="flex flex-row pt-6 pl-6 justify-end">
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" fill='#ffffff' onClick={() => setIsOpened(false)}>
               <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
           </svg>
         </div>

           <ul className="flex flex-col items-start justify-start p-6 text-right">
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix('/') ? activeStyle : ""}`}><Link to="/" className={location.pathname === withPrefix('/') ? activeStyle : ""}  onClick={() => setIsOpened(false)}>صفحه اصلی</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix('/projects/') ? activeStyle : ""}`}><Link to="/projects" onClick={(e) => setIsOpened(false)}>پروژه ها</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix('/certificates/') ? activeStyle : ""}`}><Link to="/certificates" onClick={(e) => setIsOpened(false)}> گواهینامه ها</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix('/contact-us/') ? activeStyle : ""}`}><Link to="/contact-us" partiallyActive={true}  onClick={(e) => setIsOpened(false)}>تماس با ما</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix('/about/') ? activeStyle : ""}`}><Link to="/about" onClick={(e) => setIsOpened(false)}>درباره ما</Link></li>
           </ul>
       </section>
        }

                <div className={`mx-2 w-full flex flex-row ${isScrolled ? "justify-end" : "justify-start"} col-start-3 items-center lg:hidden`} onClick={()=> setIsOpened(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" fill={isScrolled ? "#000000" :'#ffffff'}>
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
                <ul className={`hidden lg:flex flex-row justify-center items-center h-full ${isScrolled ? "col-start-2  justify-end" : ""} p-0`}>
                    <li className={`${linkStyle} ${location.pathname === withPrefix('/') ? activeStyle : ""}` } ><Link to="/"  >صفحه اصلی</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix('/projects/') ? activeStyle : ""}`}><Link to="/projects">پروژه ها</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix('/certificates/') ? activeStyle : ""}`}><Link to="/certificates"> گواهینامه ها</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix('/contact-us/') ? activeStyle : ""}`}><Link to="/contact-us">تماس با ما</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix('/about/') ? activeStyle : ""}`}><Link to="/about">درباره ما</Link></li>
                </ul>
             
            </nav>

            <main>{children}</main>

            <footer className="text-center bg-gray-900 text-gray-100">
                <div className=' h-[20vh] flex flex-col justify-center items-start text-right border-solid border-b-2 border-gray-500'>
                    <p className='pr-10 py-2'><span className='font-semibold'> نشانی:&nbsp;&nbsp;</span>اصفهان خیابان شیخ صدوق</p>
                    <p className='pr-10 py-2'><span className='font-semibold'> تلفن:&nbsp;&nbsp; </span>۰۳۱۶۶۶۶۶۶۶</p>
                    <p className='pr-10 py-2'><span className='font-semibold'>ایمیل:&nbsp;&nbsp;</span>rahestan.co@gmail.com</p>
                </div>
                <p className='p-4 m-0'>©کپی رایت- کلیه حقوق متعلق به شرکت رهستان است.</p> 
            </footer>
        </div>
    )
}
export default Layout