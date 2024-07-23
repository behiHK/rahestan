import { useIntl } from "gatsby-plugin-intl"
import logo1 from "../images/IAC_Logo.png"
import logo2 from "../images/wastewater-logo.jpg"
import logo3 from "../images/logo-mobarake3.png"
import logo4 from "../images/haj-logo.jpg"
import logo5 from "../images/qeshm-logo.png"
import logo6 from "../images/oil-logo.png"
import React  from "react"

const Client = () => {
    const intl = useIntl()
   return (
    <div className={`bg-white w-full text-center p-20`}>
        <p className='text-3xl lg:text-4xl text-gray-500 mb-20 '>{intl.formatMessage({id: "ourClients"})} </p>
        <div className='flex flex-col lg:flex-row justify-around align-items lg:h-[20vh]'>
            <img src={logo1} className="my-4 max-h-[22vh]" />
            <img src={logo4} className="my-4 max-h-[22vh]" />
            <img src={logo2} className="my-4 max-h-[22vh]"/>
           
           
            <img src={logo5} className="my-4 max-h-[22vh]" />
            <img src={logo6} className="my-4 max-h-[22vh]" />
            <img src={logo3} className="my-4 max-h-[22vh]"/>
        </div>
    </div>
   )
}

export default Client