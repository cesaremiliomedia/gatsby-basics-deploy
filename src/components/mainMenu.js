import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../utils"

const MAIN_MENU_QUERY = graphql`
  query MAIN_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: TOP_MENU }) {
        nodes {
          id
          url
          label
        }
      }
    }
  }
`

const MainMenu = props => {
  return (
    <StaticQuery
      query={MAIN_MENU_QUERY}
      render={({
        wpgraphql: {
          menuItems: { nodes: menu },
        },
      }) => {
        return (
          <nav>
            <ul>
              {menu.map(item => (
                <li key={item.label}>
                  <Link to={createLocalLink(item.url)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )
      }}
    />
  )
}

export default MainMenu
