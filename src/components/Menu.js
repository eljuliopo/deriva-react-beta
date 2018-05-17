import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Editorial</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Catálogo</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Autores</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Contacto</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Contáctanos</a></li>
                
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
