import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'

import SEO from '../components/seo'
import {responsiveTitle1, paragraph} from '../components/typography.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Container>
      <h1 className={responsiveTitle1}>NOT FOUND</h1>
      <p className={paragraph}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
