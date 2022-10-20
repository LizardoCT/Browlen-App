import React, { useState } from 'react'
import '../styles/nosotros.css'
import brow from '../assets/images/nosotros/brow.jpg'
import { IoLogoFacebook } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import AnimatePage from '../components/AnimatePage'
import nosotrosData from '../data/nosotrosData'

const Nosotros = () => {

  const [nosdata, setnosData] = useState(nosotrosData.slice(0, 1))
  const filterItem = (categoryItem) => {
    const result = nosotrosData.filter((currentData) => {
      return currentData.category === categoryItem;
    });
    setnosData(result);
  }

  return (
    <div className='us'>
      <AnimatePage>
      <div className="text-center">
        <h2  className='py-5 user-select-none fw-bold'>Nosotros</h2>
      </div>
      <section className="container pb-5 ">
        
          <h3 data-aos="fade-right" className='text-center fs-1 py-5 fw-bold'>¿Quiénes somos?</h3>
        
        <div className="row">
          <div data-aos="fade-right" className="col-md-6 d-flex justify-content-end">
            <img src={brow} className='img-fluid img-thumbnail brow' />
          </div>
          <div className='col-md-6 d-flex align-items-center' data-aos="zoom-in">
            <div className='container'>
              {nosdata.map((values) => {
                const { id, title, info } = values
                return (
                  <div key={id} className='text-center' >
                    <h6 className='fw-bold fs-4 text-black py-3' id='us-h6'>{title}</h6>
                    <p className='p-us'>{info}</p>
                  </div>
                )
              })}

              <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-center">
                  <li className="page-item text-center">
                    <a className="page-link active"  onClick={() => filterItem('mision')} >01
                    <p>NUESTRA MISION</p>
                    </a>
                  </li>
                  <li className="page-item text-center">
                    <a className="page-link" onClick={() => filterItem('valores')} >02
                    <p>NUESTROS VALORES</p>
                    </a>
                  </li>
                  <li className="page-item text-center">
                    <a className="page-link" onClick={() => filterItem('metas')} >03
                    <p>NUESTRAS METAS</p>
                    </a>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </section>

      <h3 className='text-center fs-1 py-5 fw-bold'>Nuestro equipo</h3>

      <section className='container pt-4 pb-5 text-center'>

        <div className="row">
          <div className="col-md-4 d-flex justify-content-center pb-4" data-aos="zoom-in">
            <div className="card-container pb-2 pt-4 border shadow-sm p-3 rounded" id='nos-card' style={{ width: '20rem' }}>
              <div className="d-flex justify-content-center pb-2">
                <div className='img-container1 rounded-circle'></div>
              </div>
              <div className="card-body text-center">
                <h4 className='fs-4 fw-bold'>Maria Belen</h4>
                <h3 className='fs-6 pb-3'>CEO/Founder</h3>
                <span className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque officia nostru.</span>
                <div className="social-media pb-3">
                  <a href="http://www.facebook.com/profile.php" target='blank' >
                    <IoLogoFacebook className='me-4' />
                  </a>
                  <a href="https://www.instagram.com/mariabelencarbajal/" target='blank'>
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center pb-4" data-aos="zoom-in-down">
            <div className="card-container pb-2 pt-4 border shadow-sm p-3 rounded" id='nos-card' style={{ width: '20rem' }}>
              <div className="d-flex justify-content-center pb-2">
                <div className='img-container2 rounded-circle'></div>
              </div>
              <div className="card-body text-center">
                <h4 className='fs-4 fw-bold'>Belen Carbajal</h4>
                <h3 className='fs-6 pb-3'>Chef Pastelera</h3>
                <span className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque officia nostru.</span>
                <div className="social-media pb-3">
                  <a href="http://www.facebook.com/profile.php" target='blank' >
                    <IoLogoFacebook className='me-4' />
                  </a>
                  <a href="https://www.instagram.com/mariabelencarbajal/" target='blank'>
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center pb-4" data-aos="zoom-in">
            <div className="card-container pb-2 pt-4 border shadow-sm p-3 rounded" id='nos-card' style={{ width: '20rem' }}>
              <div className="d-flex justify-content-center pb-2">
                <div className='img-container3 rounded-circle'></div>
              </div>
              <div className="card-body text-center">
                <h4 className='fs-4 fw-bold'>Maria Castillo</h4>
                <h3 className='fs-6 pb-3'>Delivery</h3>
                <span className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque officia nostru.</span>
                <div className="social-media pb-3">
                  <a href="http://www.facebook.com/profile.php" target='blank' >
                    <IoLogoFacebook className='me-4' />
                  </a>
                  <a href="https://www.instagram.com/mariabelencarbajal/" target='blank'>
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      </AnimatePage>
    </div>
  )
}

export default Nosotros