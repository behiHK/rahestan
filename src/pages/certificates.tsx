import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Certificates from "../components/Certificates"

const CertificatesPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
    <Certificates />
    </Layout>
  )
}

export default CertificatesPage

export const Head: HeadFC = () => <title>گواهینامه ها</title>