import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Issue from '../components/issue'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query IssueTemplateQuery($id: String!) {
    issue: sanityIssue(id: {eq: $id}) {
      id
      slug {
        current
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      _rawDescription(resolveReferences: {maxDepth: 5})
      posts {
        id
        publishedAt
        mainImage {
          ...SanityImage
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
`
const IssuePostTemplate = props => {
  const {data = {}, errors} = props
  const issue = data && data.issue

  return (
    <Layout>
      {errors && <GraphQLErrorList errors={errors} />}
      {issue && <SEO title={issue.title || 'Untitled'} description={toPlainText(issue._rawExcerpt)} image={issue.mainImage} />}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {issue && <Issue {...issue} />}
    </Layout>
  )
}

export default IssuePostTemplate
