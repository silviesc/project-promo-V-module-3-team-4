import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
  return (
    <div>
        <section className="titleSection landing">
          <h1 className="titleSection__h1">Proyectos molones</h1>
          <p className="titleSection__p">
            Escaparate en línea para recoger ideas a través de la tecnología.
          </p>
          <Link to="/newProject" className="titleSection__link">
            <button className="titleSection__btn--new">Nuevos proyectos</button>
          </Link>
        </section>
    </div>
  )
}

export default Landing;