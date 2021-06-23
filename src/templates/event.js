import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

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
      description_markdown
    }
  }
`

const Event = ({ data }) => {
  const event = data.strapiEvent
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return (
    <Layout>
      <div class="uk-section" uk-height-viewport="expand: true">
        <div id="nav-spacer"></div>
        <div class="uk-flex uk-visible@m">
          <div class="uk-cover-container square50">  
            <img src={event.cover.url} alt="" data-uk-cover/>
          </div>
          <div class="width50">
            <h1>{event.name}</h1>
            <p>{new Date(event.date).toLocaleDateString("it-IT", options)}</p>
            <p>{event.price}</p>
            <p>{event.description_markdown}</p>
          </div>
        </div>
        <div class="uk-hidden@m">
          <div class="uk-cover-container square80">  
            <img src={event.cover.url} alt="" data-uk-cover/>
          </div>
          <div class="width80">
            <h1>{event.name}</h1>
            <p>{new Date(event.date).toLocaleDateString("it-IT", options)}</p>
            <p>{event.price}</p>
            <ReactMarkdown>{event.description_markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Event