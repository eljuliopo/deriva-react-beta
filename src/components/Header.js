import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import boat from '../assets/svg/boat.svg'
import deriva from '../assets/svg/deriva.svg'


const Header = (props) => (

  <header id="header" className="alt">
    <Headroom>

      <Link to="/" className="logo"><img src={boat} className="logo boat" alt="boat" /><span><img src={deriva} className="logo" alt="deriva" /></span></Link>
      <nav>
          <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
      </nav>
    </Headroom>
    </header>
  )

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
