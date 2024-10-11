import { useIntl } from "gatsby-plugin-intl"
import image from "../images/manager.jpg"
import React, { useEffect, useRef, useState } from "react"


const Bio = () => {
    const intl = useIntl()
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const image = imageRef.current;
            const container = containerRef.current
            const rect = image.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate the distance from the image to the middle of the viewport
            const distanceToCenter = rect.top + rect.height / 2 - windowHeight / 2;

            // Scale and translate based on the distance to the center of the viewport
            const scaleFactor = 0.5 + ((1.5 - Math.min(1.5, Math.abs(distanceToCenter) / 100)) * 100) / 100
            const translateY = Math.max(-100, Math.min(100, -distanceToCenter / 1000)); // Adjust for sensitivity
            console.log("TRNSNSNNS.....", translateY);


            image.style.transform = `translate3d(0, -${(translateY * 100) + (translateY > 0 ? -30 : 30)}px, 0)`;
            // container.style.transform = `translate3d(0, ${translateY}px, 0)`
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`bg-white w-full flex flex-col lg:flex-row text-justify justify-center items-center min-h-[70vh] p-4 lg:p-20 ${intl.locale === "fa" ? "rtl" : "ltr"}`} ref={containerRef}>
            <p className={`text-l text-gray-500 w-full lg:w-1/2 p-4 lg:p-20 leading-loose lg:leading-10`}>{intl.formatMessage({ id: "lorem" })} </p>

            <div className="flex justify-center items-center w-full lg:w-1/2">
                <img
                    src={image}
                    className={`my-4 w-full lg:w-2/3 transition-transform ease-in-out duration-700`}
                    ref={imageRef}
                />
            </div>
        </div>
    )
}

export default Bio