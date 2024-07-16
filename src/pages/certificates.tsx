import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Certificates from "../components/Certificates"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

const CertificatesPage: React.FC<PageProps> = ({location}) => {
  const intl = useIntl()
  return (
    <>
    <Helmet>
    <title>
    {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "certificates"})}
    </title>
    </Helmet>
    <Layout location={location}>
    <Certificates />
    </Layout>
    </>
  )
}

export default CertificatesPage

// export const Head: HeadFC = () => {
//   // const intl = useIntl()
//   return <title>
//     {/* {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "certificates"})} */}
//     </title>
// }