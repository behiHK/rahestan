import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Contact from "../components/Contact"

const ContactUsPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
        <Contact />
    </Layout>
  )
}

export default ContactUsPage

export const Head: HeadFC = () => <title>تماس با ما </title>
