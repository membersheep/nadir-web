import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import "./page.css"

export const query = graphql`
  query EventQuery($id: String) {
    strapiEvent(strapiId: { eq: $id }) {
      name
      price
      date
      cover {
        url
      }
      categories {
        name
      }
      description
    }
  }
`

const Event = ({ data }) => {
  const event = data.strapiEvent
  //var coverImage = "/bg.jpg"
  // if (page.cover != null) {
  //   coverImage = page.cover.publicURL
  // }
  return (
    <Layout>
      <div class="uk-cover-container uk-light uk-flex uk-flex-column uk-flex-left" uk-height-viewport="expand: true">
        <div id="nav-spacer"></div>
        <div class="uk-padding">
          <div class="uk-container">
            <h1 id="page-title" class="uk-heading-medium">{event.name}</h1>
          </div>
          <div id="page-text" class="uk-container page-text">
            <ReactMarkdown>{event.description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Event