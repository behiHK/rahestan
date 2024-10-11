import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image28 from "../../../images/sistan1.jpg"
import image29 from "../../../images/sistan2.jpg"
import image30 from "../../../images/sistan3.jpg"
import image31 from "../../../images/sistan4.jpg"
import image32 from "../../../images/sistan5.jpg"
import image33 from "../../../images/sistan6.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "SistanProject" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 text-justify ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} border-violet-200`}> {intl.formatMessage({ id: "SistanProject" })} </p>
                    <p className="text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-2 gap-0 place-items-stretch lg:px-20 lg:h-[90vh]'>
                        <img src={image28} className='col-start-1' />
                        <img src={image29} className='col-start-2' />
                        <img src={image30} className='col-start-3' />
                        <img src={image31} className='col-start-1' />
                        <img src={image32} className='col-start-2' />
                        <img src={image33} className='col-start-3' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage