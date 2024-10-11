import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import IndustryProjects from "../components/IndustryProjects"
import RoadwayProjects from "../components/RoadwayProjects"
import BuildingProjects from "../components/BuildingProjects"
import OilProjects from "../components/OilProjects"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'gatsby'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProjectsPage: React.FC<PageProps> = ({ location }) => {
  const intl = useIntl()
  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: "companyName" })}|{intl.formatMessage({ id: "projects" })}
        </title>
      </Helmet>
      <Layout location={location}>
        <IndustryProjects />
        <OilProjects />
        <RoadwayProjects />
        <BuildingProjects />

      </Layout>
    </>
  )
}

export default ProjectsPage

// export const Head: HeadFC = () => <title>پروژه ها</title>