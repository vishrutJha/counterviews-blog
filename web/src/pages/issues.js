import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import CategoryPreviewGrid from '../components/category-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1, responsiveTitle3} from '../components/typography.module.css'
import styles from '../components/author-list.module.css'

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
// #TODO Bad Code, move to config
const prevIssues = [{"link": "issue_03_06", "name":"Issue 3:06 - June 1-30, '21"},{"link": "issue_03_05", "name":"Issue 3:05 - May 1-31, '21"},{"link": "issue_03_04", "name":"Issue 3:04 - April 1-30, '21"},{"link": "issue_03_03", "name":"Issue 3:03 - March 1-31, '21"},{"link": "issue_03_02", "name":"Issue 3:02 - February 1-28, '21"},{"link": "issue_03_01", "name":"Issue 3:01 - January 1-31, '21"},{"link": "issue_02_19", "name":"Issue 2:19 - December 1-31, '20"},{"link": "issue_02_18", "name":"Issue 2:18 - November 1-30, '20"},{"link": "issue_02_17", "name":"Issue 2:17 - October 1-31, '20"},{"link": "issue_02_16", "name":"Issue 2:16 - September 1-30, '20"},{"link": "issue_02_15", "name":"Issue 2:15 - August 1-31, '20"},{"link": "issue_02_14", "name":"Issue 2:14 - July 16-31, '20"},{"link": "issue_02_13", "name":"Issue 2:13 - July 1-15, '20"},{"link": "issue_02_12", "name":"Issue 2:12 - June 15-30, '20"},{"link": "issue_02_11", "name":"Issue 2:11 - June 1-15, '20"},{"link": "issue_02_10", "name":"Issue 2:10 - May 15-30, '20"},{"link": "issue_02_09", "name":"Issue 2:09 - May 1-15, '20"},{"link": "issue_02_08", "name":"Issue 2:08 - April 16-30, '20"},{"link": "issue_02_07", "name":"Issue 2:07 - April 1-15, '20"},{"link": "issue_02_06", "name":"Issue 2:06 - March 16-31, '20"},{"link": "issue_02_05", "name":"Issue 2:05 - March 1-15, '20"},{"link": "issue_02_04", "name":"Issue 2:04 - Feb 15-29, '20"},{"link": "issue_02_03", "name":"Issue 2:03 - Feb 1-15, '20"},{"link": "issue_02_02", "name":"Issue 2:02 - Jan 16-31, '20"},{"link": "issue_02", "name":"Issue 2:01 - Jan 1-15, '20"},{"link": "issue_01_02", "name":"Issue 1:02 - Dec 16-31, '19"},{"link": "issue_01", "name":"Issue 1:01 - Dec 1-15, '19"}]

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
        <center><h1 className={responsiveTitle1}>All our Issues</h1></center><hr/>
        {issueNodes && issueNodes.length > 0 && <CategoryPreviewGrid nodes={issueNodes} iType="issue" />}
        <h2 className={responsiveTitle3}>Previous Issues (Archives)</h2><hr/>
        <ul className={styles.list}>
          {prevIssues.map(function(d,ix){
            return(<li><h4><a style={{"text-decoration": "none", color: "inherit"}} href={"https://archive.thecounterviews.in/"+d.link} target="_blank" key={ix}>{d.name}  ›</a></h4></li>)
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export default IssuePage
