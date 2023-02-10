import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`

const PostContainer = styled.div`
  display: inline-block;
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover {
    color: #0070f3;
    border-color: #0070f3;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
  p {
    margin: 0;
  }
`

const Posts = () => {
  const data = useStaticQuery(query)
  return data.allMarkdownRemark.edges.map(({ node }) => (
    <PostContainer key={node.id}>
      <Link
        to={node.frontmatter.path}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h3>{node.frontmatter.title} &rarr;</h3>
        <p>{node.frontmatter.date}</p>
      </Link>
    </PostContainer>
  ))
}
export default Posts
