import React from "react"  
import { Link } from "gatsby"

const Card = ({ event }) => {  
  return (
    <Link to={`/event/${event.node.strapiId}`} className="uk-link-reset">
      <div>
        <p className="uk-text-uppercase uk-text-light uk-margin-small-bottom">
          {event.node.date}
        </p>
      </div>
      <div className="uk-card">
        <div className="uk-card-media-top">
          <img
            src={event.node.cover.publicURL}
            alt={event.node.cover.publicURL}
          />
        </div>
      </div>
      <div>
        <p className="uk-text-uppercase uk-text-light uk-margin-remove">
          {event.node.name}
        </p>
        <span>
          <div id="price" className="uk-text-uppercase uk-text-light uk-margin-remove">
          { event.node.price}
          </div>
        </span>
      </div>
    </Link>
  )
}

export default Card  