import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: String) {
    strapiPage(strapiId: { eq: $id }) {
      strapiId
      title
    }
  }
`

const Page = ({ data }) => {
  const page = data.strapiPage
  return (
    <Layout>
      	<div>
          <h1>{page.title}</h1>
    	</div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={page.title} />
          </div>
        </div>
    </Layout>
  )
}

export default Page
