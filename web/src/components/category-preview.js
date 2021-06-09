import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getCategoryUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function truncate(str) {
  return str.length > 150 ? str.substring(0, 149) + "..." : str;
}

function CategoryPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getCategoryUrl(props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props.excerpt && (
          <div className={styles.excerpt}>
            <p>{truncate(props.excerpt)}</p>
          </div>
        )}
      </div>
    </Link>
  )
}

export default CategoryPreview
