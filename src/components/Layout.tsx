import React, { useEffect, useState, } from 'react'
import {withPrefix, Link as GatsbyLink} from 'gatsby'
import logo from "../images/rahestan-logo.png"
import { useIntl } from 'gatsby-plugin-intl';
import {Link} from "gatsby-plugin-intl"

const Layout = ({children, location}) => {
    const intl = useIntl()
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
            <div className='flex justify-between items-center lg:px-20 sm:px-6 h-[12vh]'>
                <GatsbyLink to={intl.locale === "fa" ? "/" : "/en"} className='h-1/2'><img src={logo} className="cursor-pointer h-full " /></GatsbyLink>
            {/* <div className='text-xs  hover:text-red-500 text-gray-900 p-2 rounded-md my-auto mx-2 h-2/6'> */}
                <GatsbyLink to={intl.locale === "fa" ? "/en" : "/"} className='flex flex-row items-center text-xs text-center hover:text-red-500 text-gray-900 my-auto mx-2' >
                {/* <img src={languageIcon} className='w-4 fill' /> */}
                <p className='text-center'>{intl.locale === "fa" ? "English" : "فارسی"}</p>
                <svg fill="currentColor" x="0px" y="0px" height="16" width="16" version="1.1" id="XMLID_275_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='mx-2 hover:fill-red-500'>
                <g id="language">
                    <g>
                        <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z
                            M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3
                            z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3
                            S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12
                            S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5
                            C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z"/>
                    </g>
                    
                </g>
                </svg>
                  
                </GatsbyLink>
            {/* </div> */}
            </div>
            <nav className={`sticky top-0 z-50 px-4 h-[8vh] transition-all duration-150 ease-in  ${isScrolled ? "grid gap-0 grid-cols-3 grid-rows-1 text-gray-900 bg-white border-solid border-gray-900 border-b-4 lg:px-10 sm:px-4" : "flex justify-center text-white bg-gray-900 lg:px-20 sm:px-6"} shadow-lg` }>
            { isScrolled && <div className='flex col-span-1 h-full'><Link  to="/"><img src={logo} className="cursor-pointer mx-0 my-0 h-3/4" /></Link></div>}
        { isOpened &&
         <section className={`flex flex-col fixed top-0 ${intl.locale === "fa" ? "right-0" : "left-0" } w-4/5 h-full bg-gray-600 lg:hidden z-10`}>
         <div className={`flex flex-row pt-6 px-6 ${intl.locale === "fa" ? "justify-end" : "justify-start"}`}>
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" fill='#ffffff' onClick={() => setIsOpened(false)}>
               <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
           </svg>
         </div>

           <ul className={`flex flex-col p-6 ${intl.locale === "fa" ? "items-start justify-start  text-right" : "items-end justify-end  text-left"}`}>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix(intl.locale === "fa" ? '/' : "/en/") ? activeStyle : ""}`}><Link to="/" className={location.pathname === withPrefix('/') ? activeStyle : ""}  onClick={() => setIsOpened(false)}> {intl.formatMessage({id: "home"})}</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix(intl.locale === "fa" ? '/projects/' : '/en/projects/') ? activeStyle : ""}`}><Link to="/projects" onClick={(e) => setIsOpened(false)}>{intl.formatMessage({id: "projects"})}</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix(intl.locale === "fa" ? '/certificates/' : '/en/certificates/') ? activeStyle : ""}`}><Link to="/certificates" onClick={(e) => setIsOpened(false)}> {intl.formatMessage({id: "certificates"})}</Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix(intl.locale === "fa" ? '/contact-us/' : '/en/contact-us/') ? activeStyle : ""}`}><Link to="/contact-us" partiallyActive={true}  onClick={(e) => setIsOpened(false)}> {intl.formatMessage({id: "contactUs"})} </Link></li>
                   <li className={`text-gray-100 pb-6 ${location.pathname === withPrefix(intl.locale === "fa" ? '/about/' : '/en/about/') ? activeStyle : ""}`}><Link to="/about" onClick={(e) => setIsOpened(false)}> {intl.formatMessage({ id: "aboutUs" }).toLowerCase()}</Link></li>
           </ul>
       </section>
        }

                <div className={`mx-2 w-full flex flex-row ${isScrolled ? "justify-end" : "justify-start"} col-start-3 items-center lg:hidden`} onClick={()=> setIsOpened(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" fill={isScrolled ? "#000000" :'#ffffff'}>
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
                <ul className={`hidden lg:flex ${intl.locale === "fa" ? "flex-row" : "flex-row-reverse"} justify-center items-center h-full ${isScrolled ? "col-start-2  justify-end" : ""} p-0`}> 
                   <li className={`${linkStyle} ${location.pathname === withPrefix(intl.locale === "fa" ? '/' : "/en/") ? activeStyle : ""}` } ><Link to="/"  > {intl.formatMessage({id: "home"})}</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix(intl.locale === "fa" ? '/projects/' : '/en/projects/') ? activeStyle : ""}`}><Link to="/projects"> {intl.formatMessage({id:"projects"})}</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix(intl.locale === "fa" ? '/certificates/' : '/en/certificates/') ? activeStyle : ""}`}><Link to="/certificates"> {intl.formatMessage({id: "certificates"})}</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix(intl.locale === "fa" ? '/contact-us/' : '/en/contact-us/') ? activeStyle : ""}`}><Link to="/contact-us"> {intl.formatMessage({id: "contactUs"})}</Link></li>
                    <li className={`${linkStyle} ${location.pathname === withPrefix(intl.locale === "fa" ? '/about/' : '/en/about/') ? activeStyle : ""}`}><Link to="/about"> {intl.formatMessage({ id: "aboutUs" }).toLowerCase()}</Link></li> 
               </ul>
             
            </nav>

            <main>{children}</main>

            <footer className={`bg-gray-900 text-gray-100 ${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>
                <div className=' min-h-[30vh] flex flex-col justify-center items-start text-right border-solid border-b-2 border-gray-500 py-4 px-10 text-right leading-loose'>
                {/* <div className='flex flex-row justify-start items-start mb-6 leading-loose'> */}
                    <p>
                    {intl.formatMessage({id: "footerOfficeTehran"})}:
                    </p>
                   <div className={`${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>
                        <p className='px-6'>  {intl.formatMessage({id: "footerAddressTehran"})}</p>  
                        <p className='px-6'> {intl.formatMessage({id: "footerPhoneTehran"})}</p> 
                        
                    {/* </div>                  */}
                    </div>

                {/* <div className='flex flex-row justify-start items-start mb-6'> */}
                    <p>
                    {intl.formatMessage({id: "footerOfficeEsfahan"})}:
                    </p>
                    <div className={`${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>
                    <p className='px-6'> {intl.formatMessage({id: "footerAddressEsfahan"})}</p>  
                        <p className='px-6'> {intl.formatMessage({id: "footerPhoneEsfahan"})}</p>  
                    </div>                 
                {/* </div>           */}

                    <p >
                    info@rahestan.com
                    </p>    
                </div>
                <p className={`p-4 m-0 text-center ${intl.locale === "fa" ? "rtl" : "ltr"}`}>{intl.formatMessage({ id: "footerRights"})}</p> 
            </footer>
        </div>
    )
}
export default Layout