import React from "react"  
import { Link, StaticQuery, graphql } from "gatsby"
import NavItem from "../components/navItem.js"
import "../components/nav.css"

const Nav = () => (  
  <div class="nav" data-uk-sticky="cls-active: uk-background-primary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top">
    <div class="uk-navbar-container uk-background-primary">
      <nav className="uk-navbar uk-navbar-transparent" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li> 
              <div class="vertical-center">
                <a class="uk-logo" title="Logo" href="/"><img src="/logo.png" alt="Logo"/></a>  
              </div>
            </li>
            <li class ="uk-visible@m">
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