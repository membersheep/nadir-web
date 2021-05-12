import React from "react"  
import { Link } from "gatsby"

const EventCard = ({ event }) => {  
  return (
    <div>
      <div class="uk-cover-container uk-width-medium uk-height-medium uk-visible@m">
        <img src={event.node.cover.url} alt="" data-uk-cover/>
        <h3 class="uk-card-title">{event.node.name}</h3>
        <p>{event.node.date}</p>
      </div>
      <div class="uk-cover-container  uk-width-small uk-height-small uk-hidden@m">
        <img src={event.node.cover.url} alt="" data-uk-cover/>
        <h3 class="uk-card-title">{event.node.name}</h3>
        <p>{event.node.date}</p>
      </div>
    </div>
  )
}

export default EventCard  