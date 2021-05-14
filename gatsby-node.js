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
        pages: allStrapiPage {
          edges {
            node {
              strapiId
              title
            }
          }
        },
        events: allStrapiEvent {
          edges {
            node {
              strapiId
              name
              cover {
                url
              }
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
  createPage({
    path: `/events`,
    component: require.resolve("./src/pages/events.js"),
    context: { events: events},
  })
  events.forEach((event, index) => {
    createPage({
      path: `/event/${event.node.name.replace(" ", "").toLowerCase()}`,
      component: require.resolve("./src/templates/event.js"),
      context: {
        id: event.node.strapiId,
      },
    })
  })
  const pages = result.data.pages.edges
  pages.forEach((page, index) => {
    createPage({
      path: `/page/${page.node.title.replace(" ", "").toLowerCase()}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.node.strapiId,
        title: page.node.title,
      },
    })
  })
}