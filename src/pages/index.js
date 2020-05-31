import React from "react"  
import { Link } from "gatsby"
import Layout from "../components/layout"  
import "../assets/css/main.css"

const IndexPage = () => (  
  <Layout>
	<div class="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
		<div class="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top">
			<div>
				<h1 class="uk-margin-remove-top uk-width-1-2">Sostienici</h1>
				<p class="subtitle-text uk-visible@s uk-width-1-2">Ci sono tanti progetti in cantiere - in un futuro in cui non sarà tutto come prima, vogliamo esserci con lo stesso spirito di sempre e un rinnovato desiderio di ritrovarsi ancora più forti.  </p>
				<Link class="uk-button uk-button-primary uk-border-pill uk-hidden@s uk-width-1-2" to={"/page/5ed13f34b5c2cf00172b4204"}> 
					fai una donazione
                </Link>
                <Link class="uk-button uk-button-primary uk-border-pill uk-visible@s" to={"/page/5ed13f34b5c2cf00172b4204"}> 
					fai una donazione
                </Link>
			</div>
		</div>
		<img src="/bg.jpg" data-sizes="100vw" alt="" data-uk-cover data-uk-img data-uk-parallax="opacity: 1,0.1; easing:0"/>
	</div>
  </Layout>
)

export default IndexPage 