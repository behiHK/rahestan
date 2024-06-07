import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import BuildingProjects from "../components/BuildingProjects"

const ProjectsPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
        <BuildingProjects />
    </Layout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>پروژه ها</title>