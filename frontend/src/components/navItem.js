import React from "react"  
import { Link } from "gatsby"

const Item = ({ section }) => {  
  if (section.node.pages.length > 0) {
    return(
      <li>
        <a href="#">{section.node.title}</a>
        <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                {
                  section.node.pages.map ((page, i) => { 
                    return (
                      <li key={page.id}>{page.title}</li>
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
        <a href="#">{section.node.title}</a>
      </li>
    )
  }
}

export default Item  