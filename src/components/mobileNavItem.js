import React from "react"  
import { Link } from "gatsby"
import "../components/navItem.css"

const MobileItem = ({ section }) => {  
  if (section.node.pages.length > 0) {
    return(
      <li>
        <a id="mobile-navbar-item" href="#">{section.node.title}</a>
        <div>
            <ul class="uk-list">
                {
                  section.node.pages
                  .sort((first,second) => {
                    if (first.title > second.title) {
                      return 1;
                    } else {
                      return -1;
                    }
                  })
                  .map ((page, i) => { 
                    return (
                      <li key={page.id}>
                        <Link id="mobile-navbar-subitem" to={`/page/${page.id}`}> 
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
        <Link id="mobile-navbar-item" to={`/page/${section.node.page.id}`}> 
          {section.node.title}
        </Link>
      </li>
    )
  }
}

export default MobileItem  