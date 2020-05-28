import React from "react"  
import { Link, StaticQuery, graphql } from "gatsby"
import NavItem from "../components/navItem.js"

const Nav = () => (  
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li> 
              <div class="vertical-center">
                <img id="logo" src={'/logo.png'} alt="Logo"/>     
              </div>
            </li>
            <li>
              <Link to="/">
                <h1 id="sitename" class="uk-text">circolo nadir</h1>
              </Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <StaticQuery
              query={graphql`
                query {
                  allStrapiSection {
                    edges {
                      node {
                        strapiId
                        title
                        pages {
                          id
                          section
                          title
                        }
                        page {
                          id
                          text
                          title
                        }
                      }
                    }
                  }
                }
              `}
              render={ data =>
                data.allStrapiSection.edges.map((section, i) => {
                  return (<NavItem section={section} />)
                })
              }
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav  