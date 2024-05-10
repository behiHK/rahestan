import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import About from "../components/About"

const AboutPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
        <About />
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>درباره ما</title>