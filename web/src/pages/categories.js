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
  query CategoryPageQuery {
    categories: allSanityCategory(
      sort: { fields: [title], order: ASC }
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

const CategoryPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const categoryNodes = data && data.categories && mapEdgesToNodes(data.categories)

  return (
    <Layout>
      <SEO title='Categories' />
      <Container>
        <h1 className={responsiveTitle1}>Categories</h1>
        {categoryNodes && categoryNodes.length > 0 && <CategoryPreviewGrid nodes={categoryNodes} />}
      </Container>
    </Layout>
  )
}

export default CategoryPage
