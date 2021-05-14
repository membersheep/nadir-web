import React from "react"  
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"  
import EventsSection from "../components/eventsSection"  
import "./events.css"

const EventsPage = ({ pageContext }) => {
	console.log(pageContext)
	const events = pageContext.events
	return (  
		<Layout>
			<div id="nav-spacer"></div>
			<div class="uk-section">
				<h1 id="section-title" class="uk-margin-remove-top">Tutti gli eventi</h1>
				<div class="grid">
					{ 
						events.map((event, i) => { return (
							<div class="uk-cover-container">
						      <Link to={`/event/${event.node.name.replace(" ", "").toLowerCase()}`}> 
						        <img src={event.node.cover.url} alt="" data-uk-cover/>
						      </Link>
					      	</div>
						)})
					}
				</div>
			</div>
		</Layout>
	)
}

export default EventsPage 