import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import RoadwayProjects from "../components/RoadwayProjects"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
  const intl = useIntl()
  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: "companyName" })}&nbsp;|&nbsp;{intl.formatMessage({ id: "projects" })}
        </title>
      </Helmet>
      <Layout location={location}>
        <div className="py-10">
          <RoadwayProjects />
        </div>
      </Layout>
    </>
  )
}

export default ProjectsPage

// export const Head: HeadFC = () => <title>پروژه ها</title>