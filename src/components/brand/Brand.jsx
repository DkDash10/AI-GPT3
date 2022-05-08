import React from 'react'
import './brand.css'
import Google from '../../assets/google.png'
import Slack from '../../assets/slack.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'



const Brand = () => {
  return (
<div className="gpt3__brand section__padding">
  <div>
    <img src={Google} alt="Google" />
  </div>
  <div>
    <img src={Atlassian} alt="Atlassian" />
  </div>
  <div>
    <img src={Slack} alt="Slack" />
  </div>
  <div>
    <img src={Dropbox} alt="Dropbox" />
  </div>
  <div>
    <img src={Shopify} alt="Shopify" />
  </div>
</div> 
    )
}

export default Brand