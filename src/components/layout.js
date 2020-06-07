import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
  min-height: 80vh;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={className}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
        </Content>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
        </Footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
