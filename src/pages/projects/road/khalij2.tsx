import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image10 from "../../../images/khalij2-1.jpg"
import image11 from "../../../images/khalij2-2.jpg"
import image12 from "../../../images/khalij2-3.jpg"
import image13 from "../../../images/khalij2-4.jpg"
import image14 from "../../../images/khalij2-5.jpg"
import image15 from "../../../images/khalij2-6.jpg"
import image16 from "../../../images/khalij2-7.jpg"
import image17 from "../../../images/khalij2-8.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "KhalijFarsProject3" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 text-justify ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} border-violet-200`}> {intl.formatMessage({ id: "KhalijFarsProject3" })} </p>
                    <p className="text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-1 gap-0 place-items-stretch lg:px-20 lg:h-[90vh]'>
                        <img src={image10} className='col-start-1 row-span-2' />
                        <img src={image11} className='col-start-2' />
                        <img src={image12} className='col-start-3' />
                        <img src={image13} className='col-start-2' />
                        <img src={image14} className='col-start-3' />
                        <img src={image15} className='col-start-1' />
                        <img src={image16} className='col-start-2' />
                        <img src={image17} className='col-start-3' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage