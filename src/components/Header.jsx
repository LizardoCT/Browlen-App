import React, { useEffect } from 'react'
import '../styles/Header.css'
import cupcake from '../assets/images/cupcake.png'
import muffin from '../assets/images/muffin.png'
import cheescake from '../assets/images/cheescake.png'
import natural from '../assets/images/natural.png'
import natural2 from '../assets/images/icon.png'
import natural3 from '../assets/images/healthy-food.png'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AnimatePage from './AnimatePage'
import LeavesContainer from '../components/LeavesContainer';

const Header = () => {
  return (
    <header>
      <AnimatePage>
        <LeavesContainer />
      <div className="container d-flex">
        <div className="row d-lg-flex">

        
        <div className="col-md-6 pt-5 mt-4 header-container text-center" >

            <h2 className='fw-bold pb-3'>Expertos en brownies y postres tradicionales</h2>
            <p data-aos="fade-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores repellat aperiam quis blanditiis unde dolorem, iusto itaque voluptas atque.</p>
              <Link to='/productos' >
                <button>Ver productos</button>
              </Link>
        </div>
      
      <div className="col-md-6 pb-5 secondcol">

        <Carousel id='carousel' slide={false}>
          <Carousel.Item id='item'>
            <img
              className="cupcake"
              src={cupcake}
              alt="First slide"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="muffin"
              src={muffin}
              alt="Second slide"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cheescake"
              src={cheescake}
              alt="Third slide"
              />
          </Carousel.Item>
        </Carousel>

          </div>
          </div>
        </div>

      <div className="container hd-icons">

        <div className="d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <img src={natural} id='iconsHeader' />
            <h6>Postres <br /> saludables</h6>
          </div>
          <div className="col-md-4 text-center">
            <img src={natural3} id='iconsHeader' />
            <h6>Pedidos <br /> personalizados</h6>
          </div>
          <div className="col-md-4 text-center">
            <img src={natural2} id='iconsHeader' />
            <h6>Postres <br /> 100% artesanales</h6>
          </div>
        </div>

      </div>

      </AnimatePage>
    </header>
  )
}

export default Header