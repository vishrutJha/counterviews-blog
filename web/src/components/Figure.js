import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

export default ({node}) => {
  if (!node || !node.asset || !node.asset._id) { return null }
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    {maxWidth: 1920, quality: 100},
    clientConfig.sanity
  )
  return (
    <figure>
      <GatsbyImage image={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
}
