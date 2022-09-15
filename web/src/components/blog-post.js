import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import { useLocation } from '@reach/router'
import {Link} from 'gatsby'
import {buildImageObj, getCategoryUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import ShareButtons from "./share"
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
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
            <div>
              <ShareButtons title={props.title} url={useLocation().href}/>
            </div>
            {_rawBody && <PortableText blocks={_rawBody} />}            
            <div>
              <ShareButtons title={props.title} url={useLocation().href}/>
            </div>
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}            
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (                    
                    <Link
                      className={styles.categories}
                      to={getCategoryUrl(category.slug.current)}
                    >
                      <li key={category._id}>{category.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <div className={styles.browseMoreNav}>
          <Link to='/archive/'><h3>Read More Articles ›</h3></Link><br/>
          <Link to='/issues/'><h3>View Other Issues  ›</h3></Link>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
