import React from 'react'
import '../styles/Footer.css'
import { MdPlace } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import { CgPhone } from 'react-icons/cg'
import { AiFillInstagram } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import tarta from '../assets/images/tarta.png'

const Footer = () => {
  return (
    <div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 225"><path fill="#FFECEF" fillOpacity={1} d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,112C672,128,768,192,864,213.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
      <footer>
        <div className="container">
          <div className="row pb-2">
            <div className="col-md-6 text-center">
              <h2 className=''>Contáctenos</h2>
              <div className="info pt-4">
                <p><MdPlace className='info-icon'/>Av. Sin nombre #666, Surco</p>
                <p><IoIosMail className='info-icon'/>Info@Browlen.pe</p>
                <p><CgPhone className='info-icon'/>+51 987 654 321</p>
              </div>
              
              <div className="row">

                <div className=" c-social-icons pt-4">
                  <a target='blank' href="https://www.instagram.com/browlen.pe/">
                    <AiFillInstagram className='social-icons me-5'/>
                  </a>
                  <a target='blank' href="http://www.facebook.com/profile.php">
                    <CgFacebook className='social-icons'/>
                  </a>

                </div>
              </div>
            </div>

            <div className="col-md-6">
              <img className='' src={tarta} alt="" />
            </div>
          </div>

          <div className="row text-center pb-3 copyright pt-3">
            <span>© 2022 Browlen. Todos los derechos reservados. By
              <a target='blank' className='by' href="https://github.com/LizardoCt">nene.</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer