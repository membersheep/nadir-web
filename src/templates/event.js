import React from "react"  
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"  
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`  
  query EventQuery($id: String) {
    strapiEvent(strapiId: { eq: $id }) {
      strapiId
      name
      description
    }
  }
`

const Event = ({ data }) => {  
  const event = data.strapiEvent
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={event.cover.publicURL}
          data-srcset={event.cover.publicURL}
          data-uk-img
        >
          <h1>{event.name}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={event.content} />
            <p>
              <Moment format="MMM Do YYYY">{event.date}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Event