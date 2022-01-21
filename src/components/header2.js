import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => <header>1</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
