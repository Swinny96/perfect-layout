/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import Header from "./header2"
import "./layout2.css"

const Layout = ({ children }) => {
  return (
    <>
      <div class="layout">
        <Header />
        <div class="leftSide">2</div>
        <main>3</main>
        <footer>4</footer>
      </div>
    </>
  )
}

export default Layout
