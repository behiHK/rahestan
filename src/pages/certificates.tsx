import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const CertificatesPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
    <div className="h-[70vh]">
    گواهینامه ها
    </div>
    </Layout>
  )
}

export default CertificatesPage

export const Head: HeadFC = () => <title>گواهینامه ها</title>