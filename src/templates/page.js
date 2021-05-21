import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import "./page.css"

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
  //var coverImage = "/bg.jpg"
  // if (page.cover != null) {
  //   coverImage = page.cover.publicURL
  // }
  return (
    <Layout>
      <div class="uk-cover-container uk-light uk-flex uk-flex-column uk-flex-left" uk-height-viewport="expand: true">
        <div id="nav-spacer"></div>
        <div class="uk-padding">
          <div class="uk-container">
            <h1 id="page-title" class="uk-heading-medium">{page.title}</h1>
          </div>
          <div id="page-text" class="uk-container page-text">
            <ReactMarkdown>{page.text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
