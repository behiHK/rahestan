import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image1 from "../../../images/asphalt1.jpeg"
import image2 from "../../../images/asphalt2.jpeg"
import image3 from "../../../images/asphalt3.jpeg"
import image4 from "../../../images/asphalt4.jpg"
import image5 from "../../../images/asphalt5.jpg"
import image6 from "../../../images/asphalt6.jpg"
import image7 from "../../../images/asphalt7.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "QeshmProject1" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 text-justify ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} border-violet-200`}> {intl.formatMessage({ id: "QeshmProject1" })} </p>
                    <p className="text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-3 place-items-stretch lg:px-20 lg:h-[150vh]'>
                        <img src={image1} className='col-start-1' />
                        <img src={image2} className='col-start-2' />
                        <img src={image6} className='col-start-3 row-span-2' />
                        <img src={image4} className='col-start-1' />
                        <img src={image5} className='col-start-2' />
                        <img src={image7} className='col-start-2' />
                        <img src={image3} className='col-start-3' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage