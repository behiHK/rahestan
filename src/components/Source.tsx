import { Link } from "gatsby-plugin-intl"
import React, { useEffect, useRef, useState } from 'react'
import road from '../images/road.jpg'
import building from '../images/building.jpg'
import oil from "../images/gasline.jpeg"
import factory from "../images/asphalt2.jpeg"
import logo from "../images/logo.png"
import { useIntl } from 'gatsby-plugin-intl'


const Source = () => {
  const intl = useIntl()
  //     const imageRef = useRef(null);
  //     const containerRef = useRef(null);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const image = imageRef.current;
  //     //   const container = containerRef.current
  //       const rect = image.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       // Calculate the distance from the image to the middle of the viewport
  //       const distanceToCenter = rect.top + rect.height / 2 - windowHeight / 2;

  //       // Scale and translate based on the distance to the center of the viewport
  //       const scaleFactor = 1 + Math.max(-100, Math.min(100, -distanceToCenter / 1000)); // Adjust for sensitivity
  //       const translateY = Math.max(-100, Math.min(100, -distanceToCenter / 1000)); // Adjust for sensitivity

  //       image.style.transform = `scale3d(${scaleFactor}, ${scaleFactor}, 1) translate3d(0, -${translateY}px, 0)`;
  //     //   container.style.transform = `translate3d(0, ${translateY}px, 0)`
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);

  const [transform, setTransform] = useState('translate3d(0, -1000px, 0)');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the scale value as needed
    const scaleValue = Math.max(1, Math.min(2, 1 + scrollY / 500));
    // Adjust the translate values as needed
    const translateX = -50 * (scaleValue - 1);
    const translateY = -50 * (scaleValue - 1);

    setTransform(`translate3d(0px, ${translateY}px, 0)`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`text-justify bg-gray-0 pt-10 ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
      <div className={`w-full px-8 lg:px-44`}>
        {/* <p className='text-2xl lg:text-3xl text-gray-500 text-right pr-10 pt-10'>پروژه های انجام شده</p> */}
        <p className={`text-2xl leading-loose lg:text-3xl lg:leading-loose text-gray-600 ${intl.locale === "fa" ? "text-right rtl border-r-4" : "text-left ltr border-l-4"} mb-5 px-4 border-solid border-violet-300 `}>
          {intl.formatMessage({ id: "projectsSummaryTitle1" })} &nbsp;
          <span className={`text-xl leading-loose lg:text-2xl lg:leading-loose text-gray-400 ${intl.locale === "fa" ? "text-right rtl" : "text-left ltr"}`}>{intl.formatMessage({ id: "projectsSummaryTitle2" })} </span>
        </p>
        <p className={`text-justify text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 ${intl.locale === "fa" ? "rtl" : "ltr"} pb-20`}>
          {intl.formatMessage({ id: "projectsSummaryPart1" })}
          {/* <br />
          {intl.formatMessage({ id: "projectsSummaryPart2" })} */}
        </p>
      </div>
      <div className=' w-full'>
        <div className={`flex flex-wrap flex-col lg:flex-row-reverse justify-items-stretch w-full text-white ${intl.locale === "fa" ? "text-right" : "text-left"} lg:h-[55vh] leading-loose lg:leading-10`}>

          {/* <div className='h-full w-full lg:w-1/2'> */}
          <img src={road}
            // ref={imageRef}
            //fixed
            className='h-full w-full lg:w-1/2'
          />
          {/* </div> */}
          <div className='flex flex-col justify-items-center justify-content-center w-full lg:w-1/2 h-auto lg:h-full px-8 lg:px-28 py-6 bg-khaki-100 text-white'>
            <p className='text-2xl py-4'>
              {intl.formatMessage({ id: "roadTitle" })}
            </p>
            <p className='text-justify'>
              {intl.formatMessage({ id: "roadSummary" })}
            </p>
            <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-10 w-36 hover:shadow-inner hover:shadow-violet-0`}>
              <Link to="/projects?road" >
                {intl.formatMessage({ id: "sampleProjects" })}
              </Link>
            </div>
          </div>
        </div>
        <div className={`flex flex-col lg:flex-row justify-items-stretch w-full ${intl.locale === "fa" ? "text-right" : "text-left"} lg:h-[55vh] leading-loose lg:leading-10`}>
          <img src={oil} className='h-full w-full lg:w-1/2' />
          <div className='flex flex-col justify-items-center justify-content-center w-full lg:w-1/2 h-auto lg:h-full px-8 lg:px-28 py-6 bg-gray-0 text-gray-600'>
            <p className='text-2xl py-4'>
              {intl.formatMessage({ id: "oilTitle" })}
            </p>
            <p className='text-justify'>
              {intl.formatMessage({ id: "oilSummary" })}
            </p>
            <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-10 w-36 hover:shadow-inner hover:shadow-violet-0`}>
              <Link to="/projects?oil" >
                {intl.formatMessage({ id: "sampleProjects" })}
              </Link>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap flex-col lg:flex-row-reverse justify-items-stretch w-full text-white ${intl.locale === "fa" ? "text-right" : "text-left"} lg:h-[55vh] leading-loose lg:leading-10`}>
          <img src={building} className='h-full w-full lg:w-1/2 contrast-[.8]' />
          <div className='flex flex-col justify-items-center justify-content-center w-full lg:w-1/2 h-auto lg:h-full px-8 lg:px-28 py-6 bg-khaki-100 text-white'>
            <p className='text-2xl py-4'>
              {intl.formatMessage({ id: "buildingTitle" })}
            </p>
            <p className='text-justify'>
              {intl.formatMessage({ id: "buildingSummary" })}
            </p>
            <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-10 w-36 hover:shadow-inner hover:shadow-violet-0`}>
              <Link to="/projects?building" >
                {intl.formatMessage({ id: "sampleProjects" })}
              </Link>
            </div>
          </div>
        </div>
        <div className={`flex flex-col lg:flex-row justify-items-stretch w-full ${intl.locale === "fa" ? "text-right" : "text-left"} lg:h-[55vh] leading-loose lg:leading-10`}>
          <img src={factory} className='h-full w-full lg:w-1/2' />
          <div className='flex flex-col justify-items-center justify-content-center w-full lg:w-1/2 h-auto lg:h-full px-8 lg:px-28 py-6 bg-gray-0 text-gray-600'>
            <p className='text-2xl py-4'>
              {intl.formatMessage({ id: "factoryTitle" })}
            </p>
            <p className='text-justify'>
              {intl.formatMessage({ id: "factorySummary" })}
            </p>
            <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-10 w-36 hover:shadow-inner hover:shadow-violet-0`}>
              <Link to="/projects?industry" >
                {intl.formatMessage({ id: "sampleProjects" })}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Source
