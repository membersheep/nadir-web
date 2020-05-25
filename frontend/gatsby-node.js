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
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create events pages.
  const events = result.data.events.edges
  events.forEach((event, index) => {
    createPage({
      path: `/event/${event.node.strapiId}`,
      component: require.resolve("./src/templates/event.js"),
      context: {
        id: event.node.strapiId,
      },
    })
  })
}