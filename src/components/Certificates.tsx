import image6 from "../images/image6.jpeg"
import image7 from "../images/image7.jpeg"
import image8 from "../images/image8.jpeg"
import image9 from "../images/image9.jpeg"
import image10 from "../images/image10.jpg"
import image11 from "../images/certificate1.jpeg"
import image12 from "../images/certificate2.jpg"
import image13 from "../images/iso9001-200-8-1.jpg"
import image14 from "../images/iso29000-2010.jpg"
import React, { useState } from 'react'
import { useIntl } from "gatsby-plugin-intl"
import { Lightbox } from "react-modal-image";


const Certificates = () => {
    const intl = useIntl()
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState("");

    const handleClick = (source: string) => {
        setImage(source)
        setIsOpen(true)
    }
    return (
        <>
            {
                isOpen &&
                <Lightbox
                    // medium={urlToLargeImageFile}
                    large={image}
                    small={image}
                    hideDownload={true}
                    hideZoom={true}
                    onClose={() => {
                        setIsOpen(false)
                        setImage("")
                    }}
                />
            }

            <div className={`w-full bg-gray-0 px-10 py-10 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                {/* <p className='text-2xl lg:text-3xl text-gray-500 px-10 py-10'> {intl.formatMessage({ id: "certificates" })}</p> */}
                <div className='flex flex-col md:grid md:gap-0 md:grid-cols-10 md:grid-rows-1 md:gap-4 place-items-stretch mb-20'>
                    <img src={image12} className='col-start-2 col-span-2 cursor-pointer' onClick={() => handleClick(image12)} />
                    <img src={image11} className='col-start-4 col-span-2 cursor-pointer' onClick={() => handleClick(image11)} />
                    <img src={image13} className='col-start-6 col-span-2 cursor-pointer' onClick={() => handleClick(image13)} />
                    <img src={image14} className='col-start-8 col-span-2 cursor-pointer' onClick={() => handleClick(image14)} />

                </div>

                {/* <p className='text-2xl lg:text-3xl text-gray-500 px-10 py-10'> {intl.formatMessage({ id: "appreciations" })}</p> */}
                <div className='flex flex-col md:grid md:gap-0 md:grid-cols-10 md:grid-rows-2 md:gap-4 place-items-stretch  mb-10'>
                    <img src={image6} className='col-start-2 col-span-2 cursor-pointer' onClick={() => handleClick(image6)} />
                    <img src={image7} className='col-start-4 col-span-2 cursor-pointer' onClick={() => handleClick(image7)} />
                    <img src={image8} className='col-start-6 col-span-2 cursor-pointer' onClick={() => handleClick(image8)} />
                    <img src={image10} className='col-start-8 col-span-2 cursor-pointer' onClick={() => handleClick(image10)} />
                    <img src={image9} className='col-start-2 col-span-3 cursor-pointer' onClick={() => handleClick(image9)} />
                </div>
            </div>
        </>
    )
}

export default Certificates