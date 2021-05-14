import React from "react"  
import { Link } from "gatsby"

const EventCard = ({ event }) => {  
  return (
    <div>
      <div class="uk-cover-container square30 uk-visible@m">
      <Link to={`/event/${event.node.name.replace(" ", "").toLowerCase()}`}> 
        <img src={event.node.cover.url} alt="" data-uk-cover/>
      </Link>
      </div>
      <div class="uk-cover-container square80 uk-hidden@m">
        <Link to={`/event/${event.node.name.replace(" ", "").toLowerCase()}`}> 
          <img src={event.node.cover.url} alt="" data-uk-cover/>
        </Link>
      </div>
    </div>
  )
}

export default EventCard  