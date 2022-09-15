import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1, blockQuote} from '../components/typography.module.css'

const AboutPage = props => {

  return (
    <Layout>
      <SEO title='About Us' />
      <Container>
        <center><h1 className={responsiveTitle1}>About Us</h1></center>
        <blockquote className={blockQuote}>
          <q>
            The free and vibrant media in India permits every one to air their views. It is strongly felt that many of the views by individuals, social groups, social media. print & digital media are biased, paid or adversely affected by the hardliner & radical ideologies. In such scenario, any voice which gets louder, gives an impression of the public opinion even if not so.
          </q>
        </blockquote>
        <p>
          In the view of the above, there is a need to bring out the other side of the narratives too. It need not be essentially a pro or anti government view. In this monthly e-magazine, an attempt will be made to bring the other side of any such narrative. “The Counterviews” needs your blessings.
        </p>
        <p>
          We are a small family working to the cause of bringing the often forgotten other sides of any news, views and the happening around. The public must be made aware of both sides of any story doing rounds. We are a bunch of patriots, believing in the democratic principles of the country. We do not hesitate in keeping our balanced views even if that may not be pleasing to some.
        </p>
        <p>
          <b>Dr Sumangala Jha, the Chief Editor :</b> a highly educated lady, an Indian Air Force Sangini for almost 30 yrs and a permanent member of AFWWA. She has done BSc, MA (Sociology), MA (Hindi), B Ed and PhD from Bangalore University. She has lived in many states of India in various IAF Stations. She has vast teaching experience right from nursery, primary, secondary, pre-university, Bachelors degree as well as volunteering guide for PhD. She retired as Lecturer & HoD from a PU College in Bangalore PU Education Board.
        </p>
        <p>
          <b>Dr V N Jha, the Executive Editor :</b> a qualified Ex-IAF Officer, done MBBS, AMD, MD and is FeISAM, a veteran specialist in Aerospace Medicine who has wide experience of service as Specialist, Senior Med Offr, DyPMO of HQ CAC, IAF and a Chief Research Offr handling all Medical Research of the entire IAF. He was also a Prof of Aerospace Medicine and a PG Examiner in RGUHS Bangalore. He is the only IAF Medical Officer who was also employed as a senior scientist in DRDO, Min of Def, Govt of India from where he retired as Joint Director. He worked in various capacities as Proj Leader, Proj Director, Proj Coordinator in Aerospace Design & Development of “Life Support Equipment during his tenure. He is often seen in various TV channels as Expert in Defence & Aerospace Science & Technologies. After retirement he has been a reader of Ved & Upnishads. He is also a vivid critic of Indian and International Politics.
        </p>
      </Container>
    </Layout>
  )
}

export default AboutPage
