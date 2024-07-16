import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import About from "../components/About"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

const AboutPage: React.FC<PageProps> = ({location}) => {
  const intl = useIntl()
  return (
    <>
    <Helmet>
    <title>
    {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "aboutUs"})}
    </title>
    </Helmet>
    <Layout location={location}>
        <About />
    </Layout>
    </>
  )
}

export default AboutPage

// export const Head: HeadFC = () => {
//   // const intl = useIntl()
//   return <title>
//     {/* {intl.formatMessage({ id: "aboutUs"})} */}
//     </title>
// }