import React from "react"  
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"  
import "./events.css"

export const query = graphql`
  query EventsQuery {
    allStrapiEvent(sort: { fields: date, order: DESC }) {
		edges {
			node {
				strapiId
				name
				cover {
					url
				}
			}
		}
	}		
  }
`

const EventsPage = ({ data, pageContext }) => {
	const events = data.allStrapiEvent.edges
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