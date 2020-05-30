import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: String) {
    strapiPage(strapiId: { eq: $id }) {
      strapiId
      title
      text
    }
  }
`

const Page = ({ data }) => {
  const page = data.strapiPage
  return (
    <Layout>
      <div class="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height-page">
        <div class="uk-container uk-flex-auto top-container uk-position-bottom-left uk-margin-medium-top">
          <h1 class="uk-margin-remove-top">{page.title}</h1>
        </div>
        <img src="/bg.jpg" data-sizes="20vw" alt="" data-uk-cover data-uk-img data-uk-parallax="opacity: 1,0.1; easing:0"/>
      </div>
      <div className="uk-container uk-container-small">
        <ReactMarkdown source={page.text} />
      </div>
    </Layout>
  )
}

export default Page
