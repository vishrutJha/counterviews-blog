import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

export default function Figure ({node}) {
  if (!node || !node.asset || !node.asset._ref) return null
  const imageData = getGatsbyImageData(
    node,
    {width: 1920, quality: 100},
    clientConfig.sanity
  )
  return (
    <figure>
      <GatsbyImage image={imageData} alt={node.alt || ''} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
