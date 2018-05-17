import React from 'react'
import logo from '../assets/svg/logo.svg'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
              <h3><img src={logo} className="piola"/><br />—editorialderiva.org</h3>
            <div className="major">
                <br /><h5><i>Las ideas humanas son una construcción histórica y social<br />
                imposible de apropiar, por ello ante la propiedad intelectual<br />
                promovemos intelecto contra la propiedad</i></h5>

            </div>
            <div className="major">

               <ul className="actions">
               <p><i>Paul Gregory Bribon</i></p>
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
