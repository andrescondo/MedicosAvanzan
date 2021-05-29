import React from 'react';

import '../styles/components/landing.css'
import hero from '../img/header.png'


const Landing = () => {
  return(
    <div className="Landing">
      <section className="hero">
        <div className="hero-title">
          <h3>
            Encuentra el mejor sitio para: <br />
            • Almacenar datos de tus pacientes de manera segura <br />
            • Agendar citas y <br />
            • llevar un control de ellos
          </h3>

        </div>
        <figure>
          <img src={hero} alt="Foto Header"/>
        </figure>
      </section>
      <section className="content">

      </section>
      <section className="price">

      </section>
    </div>
  )
}

export default Landing;