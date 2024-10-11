import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import imageIndustry1 from "../../images/asphalt2.jpeg"
import imageIndustry2 from "../../images/refinery.jpeg"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { navigate } from 'gatsby'
import { Link } from "gatsby-plugin-intl"
import Layout from "../../components/Layout"
import imageOil1 from "../../images/khartang12.jpg"
import imageOil2 from "../../images/kangan5.jpeg"
import imageRoad1 from "../../images/khalij1-1.jpg"
import imageRoad2 from "../../images/khalij2-1.jpg"
import imageRoad3 from "../../images/site3.jpg"
import imageRoad4 from "../../images/sistan6.jpg"
import imageBuilding1 from "../../images/zist1.jpg"
import imageBuilding2 from "../../images/milad1.jpg"
import imageBuilding6 from "../../images/haj4.jpg"
import imageBuilding4 from "../../images/kang1.jpg"
import imageBuilding5 from "../../images/saba1.jpeg"
import imageBuilding7 from "../../images/foolad1.jpeg"
import { useEffect, useState } from "react"


const ProjectsPage: React.FC<PageProps> = ({ location }) => {
  const [category, setCategory] = useState("all")

  useEffect(() => {
    if (!!location.search) {
      setCategory(location.search.split("?")[1])
    }
  }, [location]);

  const activeStyle = `
    bg-violet-200
    text-white
`

  const buttonStyle = `
    border-2 
    border-solid
    rounded-full
    border-violet-200
    text-violet-200
    hover:text-white
    hover:bg-violet-200
    p-2
    m-2
    min-w-24
    text-center
    cursor-pointer
  `

  const intl = useIntl()
  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: "companyName" })}|{intl.formatMessage({ id: "projects" })}
        </title>
      </Helmet>
      <Layout location={location}>
        <div className="lg:p-10  bg-gray-0">
          <div className={`p-2 flex flex-wrap lg:justify-center`}>
            <div className={`${buttonStyle} ${category === "all" ? activeStyle : ""}`} onClick={() => setCategory("all")}>
              {intl.formatMessage({ id: "all" })}
            </div>

            <div className={`${buttonStyle} ${category === "road" ? activeStyle : ""}`} onClick={() => setCategory("road")}>
              {intl.formatMessage({ id: "roadTitle" })}
            </div>

            <div className={`${buttonStyle} ${category === "building" ? activeStyle : ""}`} onClick={() => setCategory("building")}>
              {intl.formatMessage({ id: "buildingTitle" })}
            </div>


            <div className={`${buttonStyle} ${category === "oil" ? activeStyle : ""}`} onClick={() => setCategory("oil")} >
              {intl.formatMessage({ id: "oilTitle" })}
            </div>

            <div className={`${buttonStyle} ${category === "industry" ? activeStyle : ""}`} onClick={() => setCategory("industry")}>
              {intl.formatMessage({ id: "factoryTitle" })}
            </div>

          </div>
          {
            (category === "all" || category === "oil") &&
            <div className='flex flex-col lg:grid lg:gap-4 lg:grid-cols-4 lg:grid-rows-1 place-items-stretch h-[90vh] lg:h-[40vh] my-8 lg:mx-10'>
              <div style={{ backgroundImage: `url(${imageOil1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='h-full p-2 col-start-1 col-span-2 lg:relative lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "KhartangProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/oil/khartang" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageOil2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-3 col-span-2 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "KanganProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/oil/kangan" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            (category === "all" || category === "road") &&
            <div className='flex flex-col lg:grid lg:gap-4 lg:grid-cols-10 lg:grid-rows-2 place-items-stretch h-[160vh] lg:h-[80vh] my-8 lg:mx-10'>
              <div style={{ backgroundImage: `url(${imageRoad1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-1 col-span-5 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "KhalijFarsProject2" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/road/khalij1" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageRoad2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-6 col-span-5 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "KhalijFarsProject3" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/road/khalij2" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageRoad3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-1 col-span-4 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "SistanProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/road/sistan" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageRoad4})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-5 col-span-5 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "QeshmProject2" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/road/qeshm" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            (category === "all" || category === "industry") &&
            <div className='flex flex-col md:grid md:gap-4 md:grid-cols-4 md:grid-rows-1 place-items-stretch h-[90vh] lg:h-[50vh] my-8 lg:mx-10'>
              <div style={{ backgroundImage: `url(${imageIndustry1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-1 col-span-2 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "QeshmProject1" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/industry/qeshm" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageIndustry2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-3 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "DamghanProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/industry/damghan" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            (category === "all" || category === "building") &&
            <div className='flex flex-col md:grid md:gap-4 md:grid-cols-5 md:grid-rows-3 place-items-stretch h-[240vh] lg:h-[120vh] my-8 lg:mx-10'>
              <div style={{ backgroundImage: `url(${imageBuilding1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='contrast-125 col-start-1 col-span-3 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "KhalijFarsProject4" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/building/khalij" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageBuilding2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-4 col-span-2 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "MiladJamProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/building/milad" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageBuilding4})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-1 col-span-2 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "KanganProject2" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/building/kangan" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageBuilding5})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-3 col-span-1 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "SabaProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/building/saba" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageBuilding6})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-4 col-span-2 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`} >
                    {intl.formatMessage({ id: "TehranProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/building/tehran" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ backgroundImage: `url(${imageBuilding7})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='col-start-1 col-span-2 lg:relative h-full lg:overflow-hidden' >
                <div className="w-full h-full transition-all duration-300 ease-in lg:absolute  lg:-bottom-24 lg:hover:bottom-0 flex flex-col justify-end">
                  <p className={`font-bold text-xl lg:text-3xl text-white px-8 ${intl.locale === "fa" ? "text-right" : "text-left"}`}>
                    {intl.formatMessage({ id: "MobarakeProject" })}
                  </p>
                  <div className={`${intl.locale === "fa" ? "self-end" : "self-right"} bg-violet-200 hover:bg-violet-300 text-center text-white px-6 py-2 rounded-full m-8 w-36 h-12 hover:shadow-inner hover:shadow-violet-0`}>
                    <Link to="/projects/building/mobarakeh" >
                      {intl.formatMessage({ id: "more" })}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage

// export const Head: HeadFC = () => <title>پروژه ها</title>