import React from 'react'
import logo from '../assets/svg/logo.svg'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
              <h3><img src={logo} className="piola"/><br />—editorialderiva.org</h3>
            <div className="row">
              <div className="4u 12u$(medium)"><br /></div>
              <div className="4u 12u$(medium)"><br /></div>
              <div className="4u 12u$(medium)">
                

                <h4><i>La literatura es una <br /> sociedad sin estado</i></h4>
              </div>
            </div>
            <div className="major">

               <ul className="actions">
               <h5>—Ricardo Piglia</h5>
               </ul>

              <br />
              <br />
              <ul className="actions">
                  <li><a href="#one" className="button small scrolly">Navegar</a></li>
              </ul>
            </div>
        </div>
    </section>
)

export default Banner
