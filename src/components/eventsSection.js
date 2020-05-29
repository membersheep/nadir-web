import React from "react"  
import { StaticQuery } from "gatsby"
import EventsCarousel from "../components/eventsCarousel"
import { graphql } from "gatsby"

const EventsSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allStrapiEvent(limit: 5) {
            edges {
              node {
                strapiId
                name
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Prossimi eventi</h1>
            <EventsCarousel events={data.allStrapiEvent.edges} />
          </div>
        </div>
      )}
    />
  )
}

export default EventsSection 

