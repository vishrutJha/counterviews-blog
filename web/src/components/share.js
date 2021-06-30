import React from 'react'

import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

import styles from './share.module.css'

const ShareButtons = ({title, url}) => {

  return(
    <div>
      <FacebookShareButton url={url} >
        <FacebookIcon  size={40} round={true}/>
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} via="drjhavn1">
        <TwitterIcon  size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} >
        <LinkedinIcon  size={40} round={true}/>
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} >
        <RedditIcon  size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon  size={40} round={true}/>
      </WhatsappShareButton>

      <EmailShareButton subject={title} body="Check out this interesting Article I found " url={url} >
        <EmailIcon  size={40} round={true}/>
      </EmailShareButton>
    </div>
  )

}
export default ShareButtons
