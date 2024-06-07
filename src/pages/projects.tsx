import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import IndustryProjects from "../components/IndustryProjects"
import RoadwayProjects from "../components/RoadwayProjects"
import BuildingProjects from "../components/BuildingProjects"

const ProjectsPage: React.FC<PageProps> = ({location}) => {
  return (
    <Layout location={location}>
        {/* <div className="text-3xl lg:text-4xl bg-gray-500 text-white text-center py-5">صنعت</div> */}
        <IndustryProjects />
        {/* <div className="text-3xl lg:text-4xl bg-gray-500 text-white text-center py-5">راهسازی</div> */}
        <RoadwayProjects />
        {/* <div className="text-3xl lg:text-4xl bg-gray-500 text-white text-center py-5">ساختمان سازی</div> */}
        <BuildingProjects />

    </Layout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>پروژه ها</title>