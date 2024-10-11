import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image6 from "../../../images/milad1.jpg"
import image7 from "../../../images/milad2.jpg"
import image8 from "../../../images/milad3.jpg"
import image9 from "../../../images/milad4.jpg"
import image10 from "../../../images/milad5.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "MiladJamProject" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 text-justify ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} border-violet-200`}> {intl.formatMessage({ id: "MiladJamProject" })} </p>
                    <p className="text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-4 md:grid-rows-2 place-items-stretch lg:px-20 lg:h-[80vh]'>
                        <img src={image8} className='col-start-1' />
                        <img src={image6} className='col-start-2 row-span-2 col-span-2' />
                        <img src={image7} className='col-start-4' />
                        <img src={image9} className='col-start-1' />
                        <img src={image10} className='col-start-4' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage