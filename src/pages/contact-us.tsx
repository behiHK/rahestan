import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

const ContactUsPage: React.FC<PageProps> = ({location}) => {
  const intl = useIntl()
  return (
    <>
    <Helmet>
    <title>
    {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "contactUs"})}
    </title>
    </Helmet>
    <Layout location={location}>
        <Contact />
    </Layout>
    </>
  )
}

export default ContactUsPage

// export const Head: HeadFC = () => {
//   // const intl = useIntl()
//   return <title>
//     {/* {intl.formatMessage({id: "companyName"})}| */}
//     {/* {intl.formatMessage({id: "contactUs"})} */}
//     </title>
// }