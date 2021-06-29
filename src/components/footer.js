import React from "react"  
import { Link } from "gatsby"
import "../components/footer.css"

const Footer = () => (  
  <footer id="footer" class="uk-margin-top" data-uk-sticky="bottom: true">
    <div class="uk-container uk-flex uk-flex-left uk-flex-wrap uk-flex-middle uk-padding">
      <div class="uk-container uk-container-small">
        <p class="uk-text-small">
          APS Circolo Nadir<br/>
          Circolo Nadir, Piazzetta Gasparotto 10, Padova <br/>
          circolonadir[at]gmail.com
        </p>
        <Link class="uk-text-small" to={"/page/trasparenzacontributi pubblici"}> 
          Trasparenza
        </Link>
      </div>
      <div class="uk-container uk-container-small">
        <p class="uk-text-small">
          © 2021 Circolo Nadir
        </p>
      </div>
      <div class="uk-container uk-container-small uk-flex ">
        <a href="https://www.instagram.com/circolonadir/" class="uk-icon-button uk-margin-small-right" uk-icon="instagram"></a>
        <a href="https://www.facebook.com/CircoloNadir/" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook"></a>
        <a href="https://www.youtube.com/results?search_query=circolo+nadir" class="uk-icon-button" uk-icon="youtube"></a>
      </div>
    </div>
  </footer>
)

export default Footer 