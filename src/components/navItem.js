import React from "react"  
import { Link } from "gatsby"
import "../components/navItem.css"

const Item = ({ section }) => {  
  if (section.node.pages.length > 0) {
    return(
      <li>
        <a id="navbar-item" href="#">{section.node.title}</a>
        <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                {
                  section.node.pages
                  .sort((first,second) => {
                    if (first.index > second.index) {
                      return 1;
                    } else {
                      return -1;
                    }
                  })
                  .map ((page, i) => { 
                    if (page.static_url == null) {
                      return (
                        <li key={page.id}>
                          <Link to={`/page/${page.title.replace(" ", "").toLowerCase()}`}> 
                            {page.title}
                          </Link>
                        </li>
                      )
                    } else {
                      return (
                        <li key={page.id}>
                          <Link to={`${page.static_url}`}> 
                            {page.title}
                          </Link>
                        </li>
                      )
                    }
                  })
                }
            </ul>
        </div>
      </li>
    )
  } else if (section.node.page != null) {
    return(
      <li>
        <Link id="navbar-item" to={`/page/${section.node.page.title.replace(" ", "").toLowerCase()}`}> 
          {section.node.title}
        </Link>
      </li>
    )
  } else {
    // go to events page
    return(
      <li>
        <Link id="navbar-item" to={`/events`}> 
          {section.node.title}
        </Link>
      </li>
    )
  } 
}

export default Item  