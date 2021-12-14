import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Works from "../components/DisplayWorks"

const WorksPage = () => (
  <Layout>
    <Seo title="My Works" />
    <Works heading="My Works"/>
  </Layout>
)

export default WorksPage
