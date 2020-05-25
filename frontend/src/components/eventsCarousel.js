import React from "react"  
import Card from "./card"
import { Link } from "gatsby"

const Events = ({ events }) => {
  return (
    <div class="uk-grid-small" data-uk-grid>
        {
          events.map((event, i) => {
            return (
              <div class="uk-width-1-5">
                <Card id="event-text" event={event} key={`event__${event.node.id}`} />
              </div>
            )
          })
        }
    </div>
  )
}

export default Events  