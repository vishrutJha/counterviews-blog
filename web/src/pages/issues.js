import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import CategoryPreviewGrid from '../components/category-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query IssuePageQuery {
    issues: allSanityIssue(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }}
      ) {
      edges {
        node {
          id
          mainImage {
            ...SanityImage
            alt
          }
          title
          excerpt
          _rawDescription
          slug {
            current
          }
        }
      }
    }
  }
`

const IssuePage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const issueNodes = data && data.issues && mapEdgesToNodes(data.issues)

  return (
    <Layout>
      <SEO title='Issues' />
      <Container>
        <h1 className={responsiveTitle1}>All Issues</h1>
        {issueNodes && issueNodes.length > 0 && <CategoryPreviewGrid nodes={issueNodes} iType="issue" />}
      </Container>
    </Layout>
  )
}

export default IssuePage
