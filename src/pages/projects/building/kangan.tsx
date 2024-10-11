import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../../../components/Layout"
import image14 from "../../../images/kang1.jpg"
import image15 from "../../../images/kang2.jpg"
import image16 from "../../../images/kang3.jpg"
import image17 from "../../../images/kang4.jpg"
import image18 from "../../../images/kang6.jpg"
import image19 from "../../../images/kang7.jpg"
import image20 from "../../../images/kang5.jpg"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()
    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "KanganProject2" })}
                </title>
            </Helmet>
            <Layout location={location}>
                <div className={`bg-white w-full py-2 lg:py-10 text-justify ${intl.locale === "fa" ? "rtl" : "ltr"}`}>
                    <p className={`text-2xl lg:text-3xl text-gray-500 p-4 m-10 lg:mx-20 border-solid ${intl.locale === "fa" ? "border-r-4" : "border-l-4"} border-violet-200`}> {intl.formatMessage({ id: "KanganProject2" })} </p>
                    <p className="text-l leading-loose lg:text-xl lg:leading-loose text-gray-500 px-10 pb-5 lg:px-20 lg:pb-10">
                        {intl.formatMessage({ id: "lorem" })}
                    </p>
                    <div className='flex flex-col md:grid md:gap-2 md:grid-cols-3 md:grid-rows-4 place-items-stretch lg:px-20 lg:h-[80vh]'>
                        <img src={image14} className='col-start-1 row-span-2' />
                        <img src={image15} className='col-start-2 row-span-2' />
                        <img src={image16} className='col-start-3 row-span-2' />
                        <img src={image17} className='col-start-1 row-span-2' />
                        <img src={image20} className='col-start-2 row-span-2' />
                        <img src={image18} className='col-start-3' />
                        <img src={image19} className='col-start-3' />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProjectsPage