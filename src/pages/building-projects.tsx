import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import BuildingProjects from "../components/BuildingProjects"
import { useIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"

const ProjectsPage: React.FC<PageProps> = ({location}) => {
  const intl = useIntl()
  return (
    <>
    <Helmet>
    <title>
    {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "projects"})}
    </title>
    </Helmet>
    <Layout location={location}>
       <div className="py-10">
       <BuildingProjects />
       </div>
    </Layout>
    </>
  )
}

export default ProjectsPage

// export const Head: HeadFC = () => {
//   const intl = useIntl()
//   return <title>
//     {intl.formatMessage({id: "companyName"})}|{intl.formatMessage({id: "projects"})}
//     </title>
// }