import React from "react"  
import { Link } from "gatsby"
import Layout from "../components/layout"  
import "../assets/css/main.css"

const IndexPage = () => (  
  <Layout>
  	<div id="nav-spacer"></div>
  	<div class="uk-container uk-section">
  		<h1 id="section-title" class="uk-margin-remove-top uk-width-1-2">Prossimi eventi</h1>
		<div class="uk-flex uk-flex-between" uk-grid>
	        <div class="uk-card uk-card-default uk-card-body uk-width-medium uk-height-medium uk-visible@m">
	            <h3 class="uk-card-title">Evento</h3>
	            <p>21/11/1988</p>
	        </div>
	        <div class="uk-card uk-card-default uk-card-body uk-width-medium uk-height-medium uk-visible@m">
	            <h3 class="uk-card-title">Evento</h3>
	            <p>21/11/1988</p>
	        </div>
	        <div class="uk-card uk-card-default uk-card-body uk-width-medium uk-height-medium uk-visible@m">
	            <h3 class="uk-card-title">Evento</h3>
	            <p>21/11/1988</p>
	        </div>
	        <div class="uk-card uk-card-default uk-card-body uk-width-small uk-height-small uk-hidden@m">
	            <h3 class="uk-card-title">Evento</h3>
	            <p>21/11/1988</p>
	        </div>
	        <div class="uk-card uk-card-default uk-card-body uk-width-small uk-height-small uk-hidden@m">
	            <h3 class="uk-card-title">Evento</h3>
	            <p>21/11/1988</p>
	        </div>
	        <div class="uk-card uk-card-default uk-card-body uk-width-small uk-height-small uk-hidden@m">
	            <h3 class="uk-card-title">Evento</h3>
	            <p>21/11/1988</p>
	        </div>
		</div>
	</div>
	<div class="uk-container uk-section">
		<h1 id="section-title" class="uk-margin-remove-top uk-width-1-2">Cos'è il Circolo Nadir?</h1>
		<p class="uk-text-small">Uno spazio fisico capace di divenire spazio di azione per costruire e trasformare la realtà.</p>
		<div class="uk-column-1-3@s">
			<p class="uk-text-small">Nadir è un luogo in cui sviluppare idee, pensieri e pratiche; il punto diametralmente opposto allo zenit, sulla direzione che parte dal cielo e punta verso il basso. Nadir è un circolo in cui tutte le costellazioni del pensiero servono a costruire socialità, cultura, aggregazione e mutualismo tra le persone che lo vivono.</p>
			<p class="uk-text-small">Uno spazio in cui ostinatamente muoversi nella direzione in cui scovare ciò che può cambiare noi e il mondo che ci circonda. È una direzione chiara che si sposta se noi ci spostiamo, seguendo percorsi comuni per ottenere obiettivi collettivi in orizzonti sempre più ampi.</p>
			<p class="uk-text-small">Il circolo Nadir vuole diventare un punto di riferimento capace di offrire una proposta culturale innovativa e continuativa, vuole essere una risposta a esigenze e bisogni in costante mutamento, uno spazio inedito nelle forme e nei metodi di gestione.</p>
		</div>
	</div>
	<div class="uk-container uk-section">
		<h1 id="section-title" class="uk-margin-remove-top uk-width-1-2">Sostienici</h1>
		<p class="subtitle-text uk-visible@s uk-width-1-2">Ci sono tanti progetti in cantiere - in un futuro in cui non sarà tutto come prima, vogliamo esserci con lo stesso spirito di sempre e un rinnovato desiderio di ritrovarsi ancora più forti.  </p>
		<Link class="uk-button uk-button-primary uk-border-pill uk-hidden@s uk-width-1-2" to={"/page/sostieninadir"}> 
			fai una donazione
        </Link>
        <Link class="uk-button uk-button-primary uk-border-pill uk-visible@s" to={"/page/sostieninadir"}> 
			fai una donazione
        </Link>
	</div>


  </Layout>
)

export default IndexPage 