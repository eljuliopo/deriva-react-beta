import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/editorial">Editorial</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Catálogo</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Autores</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Blog</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Producción</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Despacho</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button"> <span className="icon fa-envelope"> Contáctanos</span></a></li>

            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
