import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Category from '../components/category'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: {eq: $id}) {
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
const CategoryPostTemplate = props => {
  const {data = {}, errors} = props
  const category = data && data.category

  return (
    <Layout>
      {errors && <GraphQLErrorList errors={errors} />}
      {category && <SEO title={category.title || 'Untitled'} description={toPlainText(category._rawExcerpt)} image={category.mainImage} />}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {category && <Category {...category} />}
    </Layout>
  )
}

export default CategoryPostTemplate
