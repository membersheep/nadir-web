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
                  section.node.pages.map ((page, i) => { 
                    return (
                      <li key={page.id}>
                        <Link to={`/page/${page.id}`}> 
                          {page.title}
                        </Link>
                      </li>
                    ) 
                  })
                }
            </ul>
        </div>
      </li>
    )
  } else {
    return(
      <li>
        <Link id="navbar-item" to={`/page/${section.node.page.id}`}> 
          {section.node.title}
        </Link>
      </li>
    )
  }
}

export default Item  