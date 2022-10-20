import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import '../styles/Home.css'
import strawberry from '../assets/images/strawberry.jpg'
import blueberry from '../assets/images/blueberry.jpg'
import raspberry from '../assets/images/raspberry.jpg'
import ingredients from '../assets/images/cakes.png'
import data from '../data/data'
import fresaChocolate from '../assets/images/fresaChocolate.jpg'
import icon3 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon1 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'

const Home = () => {
  return (
    <div>
      <Fragment>
        <Header />

        {/* nuestros postres */}

        <section className='products text-center'>
          <div className="container c-b">
            <div className='text-center titleproducts'>Nuestros postres</div>
            <div className="row text-center">
              <div className="col-md-4" id='card-products' data-aos="fade-right">
                <img src={strawberry} title='cheescake de fresa' />
                <h2>Cheescake de fresa</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <h3 className='pb-3 fs-5 fw-bold'>S/. 15.00</h3>
              </div>

              <div className="col-md-4" id='card-products' data-aos="fade-up-right">
                <img src={blueberry} title='cheescake de arándanos' />
                <h2>Cheescake de arándano</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <h3 className='pb-3 fs-5 fw-bold'>S/. 20.00</h3>
              </div>

              <div className="col-md-4" id='card-products' data-aos="fade-left">
                <img src={raspberry} title='cheescake de frambuesa' />
                <h2>Cheescake de frambuesa</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <h3 className='pb-3 fs-5 fw-bold'>S/. 17.00</h3>
              </div>
            </div>
          </div>
            <button className='btn2'>
              <span className="label fw-bold">
                <a href="/productos">Ver todo</a>
              </span>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" /></svg>
              </span>
            </button>
        </section>

        {/* variedad de toppings */}

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFECEF" fillOpacity={1} d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,112C672,128,768,192,864,213.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        <section className='ingredients'>
          <div className="container">
            <div className="row text-center d-flex justify-content-center">

              <div className="col-md-12">
                <h2 data-aos="zoom-in">Variedad de toppings para todos los gustos</h2>
                <p data-aos="zoom-in">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni blanditiis dignissimos.</p>

                <div className='circleMap container'>
                  {
                    data.map((item) => (
                      <div className={item.class} key={item.key} >
                        <img src={item.item} alt="toppings" id='rotation' data-aos="zoom-in"/>
                        <h6 data-aos="zoom-in-up">{item.description}</h6>
                      </div>
                    ))
                  }
                  <div className='center'>
                    <img src={ingredients} className='img-fluid' data-aos="zoom-in" />
                  </div>
                </div>

              </div>
              <Link to='/productos' className='last-btn'><button>Ver más</button></Link>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,112C672,128,768,192,864,213.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>

        {/* porque elegirnos */}

        <section className='why pb-5 mb-5'>
          <div className="container">
            <div className="row">

              <p data-aos="zoom-in-down" className='text-center why-title'>Por qué elegirnos</p>

              <div className="col-md-4 pt-3 text-center col-info">

                <div className="row first-card pb-4 text-center" data-aos="zoom-in-down">
                  <div className="col-8">
                    <h5 className='pb-3'>productos de calidad</h5>
                    <span className='d-flex'>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit quis cupiditate voluptatum.
                    </span>
                  </div>
                  <div className="col col-img">
                    <img src={icon1} alt="" />
                  </div>
                </div>

                <div className="row second-card pt-4 text-center" data-aos="zoom-in-right">
                  <div className="col-8">
                    <h5 className='pb-3'>entrega gratis</h5>
                    <span className='d-flex'>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit quis cupiditate voluptatum.
                    </span>
                  </div>
                  <div className="col col-img">
                    <img src={icon2} alt="" />
                  </div>
                </div>

              </div>

              <div className="col-md-4 pt-3 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                <img src={fresaChocolate} className='img-fluid center-img' />
              </div>


              <div className="col-md-4 pt-3 col-info-right">

                <div className="row third-card pb-4 text-center" data-aos="zoom-in-up">
                  <div className="col col-img-right">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="col-8">
                    <h5 className='pb-3'>SERVICIO DE CATERING</h5>
                    <span className='d-flex'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit quis cupiditate voluptatum.
                    </span>
                  </div>
                </div>

                <div className="row fourth-card pt-4 text-center" data-aos="zoom-in-left">
                  <div className="col col-img-right">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="col-8">
                    <h5 className='pb-3'>pagos contra entrega</h5>
                    <span className='d-flex'>Lorem ipsum dolor sit amet consectetur
                      adipisicing elit quis cupiditate voluptatum.
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </Fragment>
    </div>
  )
}

export default Home