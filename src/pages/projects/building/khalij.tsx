import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image1 from "../../../images/zist1.jpg"
import image2 from "../../../images/zist2.jpg"
import image3 from "../../../images/zist3.jpg"
import image4 from "../../../images/zist4.jpg"
import image5 from "../../../images/zist5.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "KhalijFarsProject4" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4 text-right" : "border-l-4 text-left"} border-violet-200`}> {intl.formatMessage({ id: "KhalijFarsProject4" })} </p>
                    <p className="text-l leading-loose lg:text-xl text-justify lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-2 place-items-stretch lg:px-20 lg:h-[80vh]'>
                        <img src={image1} className='col-start-1' />
                        <img src={image5} className='col-start-2' />
                        <img src={image2} className='col-start-3' />
                        <img src={image4} className='col-start-1' />
                        <img src={image3} className='col-start-2' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage