import React from "react"  
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"
import EventCard from "../components/eventCard.js"
import "../components/eventsSection.css"

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
                cover {
                  url
                }
              }
            }
          }
        }
      `}
      render={ data => (
        <div class="uk-section">
          <h1 id="section-title" class="uk-margin-remove-top">Prossimi eventi</h1>
          <div class="uk-flex uk-flex-between uk-visible@m">
            { data.allStrapiEvent.edges.map((event, i) => { return (<EventCard event={event} />) }) }
          </div>
          <div class="uk-hidden@m">
            { data.allStrapiEvent.edges.map((event, i) => { return (<EventCard event={event} />) }) }
          </div>
        </div>
      )}
    />
  )
}

export default EventsSection 

