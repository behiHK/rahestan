import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Introduction from "../components/Introduction"
import Source from "../components/Source"
import Projects from "../components/Projects"

const IndexPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
      <div className="bg-no-repeat bg-cover bg-[url('../images/construction.jpg')] bg-fixed">
        <Header/>
        <Introduction/>
        <Projects />
        <Source />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>راهسازی رهستان</title>
