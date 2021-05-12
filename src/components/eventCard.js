import React from "react"  
import { Link } from "gatsby"

const EventCard = ({ event }) => {  
  return (
    <div>
      <div class="uk-card uk-card-default uk-card-body uk-width-medium uk-height-medium uk-visible@m">
        <h3 class="uk-card-title">{event.node.name}</h3>
        <p>{event.node.date}</p>
      </div>
      <div class="uk-card uk-card-default uk-card-body uk-width-small uk-height-small uk-hidden@m">
        <h3 class="uk-card-title">{event.node.name}</h3>
        <p>{event.node.date}</p>
      </div>
    </div>
  )
}

export default EventCard  