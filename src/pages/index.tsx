import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Introduction from "../components/Introduction"
import Source from "../components/Source"
import Projects from "../components/Projects"
import { injectIntl, Link, FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"
import Client from "../components/Client"

const IndexPage: React.FC<PageProps> = ({location}) => {
  const intl = useIntl()
  return (
    <>
    <Helmet>
    <title>
    {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "completeCompanyName"})}
    </title>
    </Helmet>
    <Layout location={location}>
      {/* <div className="bg-no-repeat bg-cover bg-[url('../images/road4.jpg')] bg-fixed"> */}
        <Header/>
        {/* <Introduction/> */}
        {/* <Projects /> */}
        <Source />
        <Client />
      {/* </div> */}
    </Layout>
    </>
  )
}

export default IndexPage

// export const Head: HeadFC = () => {
//   const intl = useIntl()
//   return <title>
//     {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "completeCompanyName"})}
//     </title>
// }