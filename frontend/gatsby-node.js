/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {  
  const { createPage } = actions

  const result = await graphql(
    `
      {
        events: allStrapiEvent {
          edges {
            node {
              strapiId
            }
          }
        }
        pages: allStrapiPage {
          edges {
            node {
              strapiId
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const events = result.data.events.edges
  const pages = result.data.pages.edges
  events.forEach((event, index) => {
    createPage({
      path: `/event/${event.node.strapiId}`,
      component: require.resolve("./src/templates/event.js"),
      context: {
        id: event.node.strapiId,
      },
    })
  })
  pages.forEach((page, index) => {
    createPage({
      path: `/page/${page.node.strapiId}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.node.strapiId,
        title: page.node.title,
      },
    })
  })
}