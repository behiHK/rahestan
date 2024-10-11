import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image1 from "../../../images/khalij1-1.jpg"
import image2 from "../../../images/khalij1-2.jpg"
import image3 from "../../../images/khalij1-3.jpg"
import image4 from "../../../images/khalij1-4.jpg"
import image5 from "../../../images/khalij1-5.jpg"
import image6 from "../../../images/khalij1-6.jpg"
import image7 from "../../../images/khalij1-7.jpg"
import image8 from "../../../images/khalij1-8.jpg"
import image9 from "../../../images/khalij1-9.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "KhalijFarsProject2" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 text-justify ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} border-violet-200`}> {intl.formatMessage({ id: "KhalijFarsProject2" })} </p>
                    <p className="text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-4 lg:px-20 lg:h-[160vh] place-items-stretch'>
                        <img src={image1} className='col-start-1 row-span-2' />
                        <img src={image2} className='col-start-2' />
                        <img src={image6} className='col-start-3' />
                        <img src={image4} className='col-start-2' />
                        <img src={image8} className='col-start-3' />
                        <img src={image7} className='col-start-1' />
                        <img src={image3} className='col-start-2' />
                        <img src={image5} className='col-start-3' />
                        <img src={image9} className='col-start-1' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage