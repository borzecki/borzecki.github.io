import React from "react"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `borzeckid`,
        `full-stack`,
        `software engineer`,
        `freelance`,
        `developer`,
        `python`,
        `django`,
        `react`,
        `redux`,
      ]}
    />
    <LandingBio />
    <Posts />
  </Layout>
)

export default IndexPage
