import React from "react"  
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"  
import EventsSection from "../components/eventsSection"

import "../assets/css/main.css"

const IndexPage = () => (  
  <Layout>
     <div className="uk-section-primary">
        <div className="uk-container uk-container-large">
          <h1 id="section-title">Sostienici</h1>
          <p id="section-text">sostienici (testo più pulsanti donazione e 5x1000)</p>
        </div>
      </div>
  </Layout>
)

export default IndexPage 