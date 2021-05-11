import React from "react"  
import { Link, graphql, useStaticQuery } from "gatsby"
import NavItem from "../components/navItem.js"
import MobileNavItem from "../components/mobileNavItem.js"
import "../components/nav.css"

const Nav = () => {
  const { allStrapiSection } = useStaticQuery(
    graphql`
      query NavQuery {
        allStrapiSection(sort: {fields: strapiId}) {
          edges {
            node {
              strapiId
              title
              pages {
                id
                section
                title
                static_url
              }
              page {
                id
                title
              }
            }
          }
        }
      }
    `
  )
  return (
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
                <a id="nav-title" title="Title" href="/"><img src="/nadir.png" alt="Nadir"/></a>  
              </li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <button id="menu-button" class="uk-navbar-toggle uk-hidden@s" type="button" uk-icon="icon: menu; ratio: 2" data-uk-toggle="target: #navbar-small"></button>
            <ul class="uk-navbar-nav uk-visible@s">
              { allStrapiSection.edges.map((section, i) => { return (<NavItem section={section} />) }) }
            </ul>
          </div>
        </nav>
        <ul id="navbar-small" class="uk-list uk-hidden@s" hidden>
          { allStrapiSection.edges.map((section, i) => { return (<MobileNavItem section={section} />) }) }
        </ul>
      </div>
    </div>
  )
}

export default Nav  