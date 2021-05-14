import React from "react"  
import { Link } from "gatsby"

const EventCard = ({ event }) => {  
  return (
    <div>
      <div class="uk-cover-container square30 uk-visible@m">
        <img src={event.node.cover.url} alt="" data-uk-cover/>
      </div>
      <div class="uk-cover-container square80 uk-hidden@m">
        <img src={event.node.cover.url} alt="" data-uk-cover/>
      </div>
    </div>
  )
}

export default EventCard  