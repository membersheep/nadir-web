import React from "react"  
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"
import EventCard from "../components/eventCard.js"

const EventsSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allStrapiEvent(limit: 3) {
            edges {
              node {
                strapiId
                name
                date
              }
            }
          }
        }
      `}
      render={ data => (
        <div class="uk-container uk-section">
          <h1 id="section-title" class="uk-margin-remove-top uk-width-1-2">Prossimi eventi</h1>
          <div class="uk-flex uk-flex-between" uk-grid>
            { data.allStrapiEvent.edges.map((event, i) => { return (<EventCard event={event} />) }) }
          </div>
        </div>
      )}
    />
  )
}

export default EventsSection 

