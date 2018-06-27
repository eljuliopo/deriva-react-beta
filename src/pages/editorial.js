import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import logo from '../assets/svg/logo.svg'

const Editorial = (props) => (
    <div>
        <Helmet>
            <title>Editorial Deriva</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  <header className="major">
                      <h1>Editorial Deriva</h1>
                  </header>
                  <h2 id="content">Palabras de presentación</h2>

                    <div className="row">
                    <div className="6u 12u$(small)">
                        <img src={logo} className="logo" />
                        <h4>Origen</h4>
                        <p>Editorial Deriva se conforma con el objetivo de proveer materiales teóricos que permitan acompañar y potenciar las luchas que despliega la población oprimida y explotada de este y otros territorios.</p>
                        <p>Este proyecto editorial surge como un intento por explorar el vasto océano del conocimiento, entendiendo que cualquier división entre los saberes no es más que una incompleta forma de experienciar el mundo. Lejos de seguir una sola corriente dentro del enorme flujo de ideas críticas acumuladas durante la desventura humana, preferimos adentrarnos, a tientas, hacia la deriva teórica. En este océano donde (para bien) han muerto las certidumbres, navegamos sin más dirección que aquella que propone el viento, guiados por la intuición de visibilizar relatos de enorme poder emancipatorio que no han tenido cabida bajo las rígidas estructuras ortodoxas.</p>
                    </div>
                    <div className="6u 12u$(small)">
                    <h4>Timón y vela</h4>
                    <p>Como timón y vela, asumimos la crítica y la perspectiva histórica, para situarnos en un punto espacial que nos permita integrar las repercusiones que genera cualquier aporte desde un campo del conocimiento a otro. A su vez, nos reconocemos en todas aquellas situaciones antiautoritarias que ha parido la civilización, impulsados por el afán de promover un cuestionamiento que contribuya a descomponer este entramado de relaciones humanas explotadoras, inconexas y alienantes.</p>
                    <h4>Faucibus consequat lorem</h4>
                    <p>Desde el sur del río Maule, geografía que presenció la resistencia al inca, el avance del imperio español y el disciplinamiento y descomposición del campesinado, buscamos aportar al desmantelamiento teórico y político de la ideología que violenta las sociedades humanas, que secuestra su autonomía y libertad, y degrada progresivamente las condiciones de mantención de la vida en amplias regiones del planeta. Esperamos que la difusión de los elementos teóricos en este sitio web contribuya a potenciar la movilización popular contra la explotación de clases sociales, ayuden a subvertir el modo de vida capitalista imperante y a detener el avance extractivista global.</p>
                    </div>
                    <div className="4u 12u$(medium)">
                    </div>
                    <div className="4u 12u$(medium)">
                    </div>
                    <div className="4u 12u$(medium)">
                        <h4>Accumsan montes viverra</h4>
                        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    </div>
                </div>
                </div>

            </section>
        </div>

    </div>
)

export default Editorial
