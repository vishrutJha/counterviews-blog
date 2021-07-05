import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'

import {Link} from 'gatsby'
import {useLocation} from '@reach/router'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import ShareButtons from "./share"
import PortableText from './portableText'
import Container from './container'

import BlogPostPreviewGrid from '../components/blog-post-preview-list'

import styles from './category.module.css'

function Issue (props) {
  const {_rawDescription, posts, title, mainImage, documentUrl} = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {documentUrl ? 
               <div className={styles.downloadPdf}>
                <Link target="_blank" to={documentUrl}> ↓ View / Download this Issue as PDF </Link><br/>
              </div> : ''
            }
            <div>
              <ShareButtons title={title} url={useLocation().href} />
            </div>
            {_rawDescription && <PortableText blocks={_rawDescription} />}
            {posts && posts.length > 0 && <BlogPostPreviewGrid nodes={posts} />}
            {documentUrl ? 
               <div className={styles.downloadPdf}>
                <Link target="_blank" to={documentUrl}> ↓ View / Download this Issue as PDF </Link><br/>
              </div> : ''
            }
            <div>
              <ShareButtons title={title} url={useLocation().href} />
            </div>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Issue
