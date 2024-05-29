import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import brow from "../assets/images/nosotros/brow.jpg";
import brow2 from "../assets/images/portada2.png";
import brow3 from "../assets/images/portada3.png";
import "../styles/nosotros.css";
import AnimatePage from "../components/AnimatePage";

const Nosotros = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="us">
      <AnimatePage>
        <div className="text-center">
          <h2 className="py-5 user-select-none fw-bold">Nosotros</h2>
        </div>
        <section className="container pb-5 ">
          <h3 data-aos="fade-right" className="text-center fs-1 py-5 fw-bold">
            ¿Quiénes somos?
          </h3>

          <div className="row">
            <div
              data-aos="fade-right"
              className="col-md-6 d-flex justify-content-end"
            >
              <img src={brow} className={
                    toggleState === 1
                      ? "img-fluid img-thumbnail brow-active slide-in-right"
                      : "img-fluid img-thumbnail brow"
                  } />
              <img src={brow2} className={
                    toggleState === 2
                      ? "img-fluid img-thumbnail brow-active slide-in-right"
                      : "img-fluid img-thumbnail brow"
                  } />
              <img src={brow3} className={
                    toggleState === 3
                      ? "img-fluid img-thumbnail brow-active slide-in-right"
                      : "img-fluid img-thumbnail brow"
                  } />
            </div>
            <div
              className="col-md-6 d-flex align-items-center"
              data-aos="zoom-in"
            >
              <div className="container">
                <div
                  className={
                    toggleState === 1
                      ? "content active-content text-center"
                      : "content text-center"
                  }
                >
                  <h6 className="fw-bold fs-4 text-black py-3" id="us-h6">
                    OFRECER PRODUCTOS DE CALIDAD PARA TODOS LOS CLIENTES
                  </h6>
                  <p className="p-us">
                    01. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officiis reprehenderit sit iste fuga tempore ipsam dolor
                    veritatis accusantium nisi voluptas, perferendis ipsa
                    architecto natus.
                  </p>
                </div>
                <div
                  className={
                    toggleState === 2
                      ? "content active-content text-center"
                      : "content text-center"
                  }
                >
                  <h6 className="fw-bold fs-4 text-black py-3" id="us-h6">
                    SERVIR SOLO PRODUCTOS FRESCOS PARA USTEDES
                  </h6>
                  <p className="p-us">
                    02. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officiis reprehenderit sit iste fuga tempore ipsam dolor
                    veritatis accusantium nisi voluptas, perferendis ipsa
                    architecto natus.
                  </p>
                </div>
                <div
                  className={
                    toggleState === 3
                      ? "content active-content text-center"
                      : "content text-center"
                  }
                >
                  <h6 className="fw-bold fs-4 text-black py-3" id="us-h6">
                    ASEGURAR EL MEJOR AMBIENTE Y ATENCION PARA TODOS
                  </h6>
                  <p className="p-us">
                    03. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officiis reprehenderit sit iste fuga tempore ipsam dolor
                    veritatis accusantium nisi voluptas, perferendis ipsa
                    architecto natus.
                  </p>
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination d-flex justify-content-center">
                    <li className="page-item text-center">
                      <a
                        className={
                          toggleState === 1
                            ? "active page-link"
                            : " page-link"
                        }
                        onClick={() => toggleTab(1)}
                      >
                        01
                        <p>NUESTRA MISION</p>
                      </a>
                    </li>
                    <li className="page-item text-center">
                      <a
                        className={
                          toggleState === 2
                            ? "active page-link"
                            : " page-link"
                        }
                        onClick={() => toggleTab(2)}
                      >
                        02
                        <p>NUESTROS VALORES</p>
                      </a>
                    </li>
                    <li className="page-item text-center">
                      <a
                        className={
                          toggleState === 3
                            ? "active page-link"
                            : " page-link"
                        }
                        onClick={() => toggleTab(3)}
                      >
                        03
                        <p>NUESTRAS METAS</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <h3 className="text-center fs-1 py-5 fw-bold">Nuestro equipo</h3>

        <section className="container pt-4 pb-5 text-center">
          <div className="row">
            <div
              className="col-md-4 d-flex justify-content-center pb-4"
              data-aos="zoom-in"
            >
              <div
                className="card-container pb-2 pt-4 border shadow-sm p-3 rounded"
                id="nos-card"
                style={{ width: "20rem" }}
              >
                <div className="d-flex justify-content-center pb-2">
                  <div className="img-container1 rounded-circle"></div>
                </div>
                <div className="card-body text-center">
                  <h4 className="fs-4 fw-bold">Pepita Rodriguez</h4>
                  <h3 className="fs-6 pb-3">CEO/Founder</h3>
                  <span className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam itaque officia nostru.
                  </span>
                  <div className="social-media pb-3">
                    <a
                      href="http://www.facebook.com/profile.php"
                      target="blank"
                    >
                      <IoLogoFacebook className="me-4" />
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
                      <AiFillInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-flex justify-content-center pb-4"
              data-aos="zoom-in-down"
            >
              <div
                className="card-container pb-2 pt-4 border shadow-sm p-3 rounded"
                id="nos-card"
                style={{ width: "20rem" }}
              >
                <div className="d-flex justify-content-center pb-2">
                  <div className="img-container2 rounded-circle"></div>
                </div>
                <div className="card-body text-center">
                  <h4 className="fs-4 fw-bold">Antonia Rojas</h4>
                  <h3 className="fs-6 pb-3">Chef Pastelera</h3>
                  <span className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam itaque officia nostru.
                  </span>
                  <div className="social-media pb-3">
                    <a
                      href="http://www.facebook.com/profile.php"
                      target="blank"
                    >
                      <IoLogoFacebook className="me-4" />
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
                      <AiFillInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-flex justify-content-center pb-4"
              data-aos="zoom-in"
            >
              <div
                className="card-container pb-2 pt-4 border shadow-sm p-3 rounded"
                id="nos-card"
                style={{ width: "20rem" }}
              >
                <div className="d-flex justify-content-center pb-2">
                  <div className="img-container3 rounded-circle"></div>
                </div>
                <div className="card-body text-center">
                  <h4 className="fs-4 fw-bold">Juan Valdez</h4>
                  <h3 className="fs-6 pb-3">Delivery</h3>
                  <span className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam itaque officia nostru.
                  </span>
                  <div className="social-media pb-3">
                    <a
                      href="http://www.facebook.com/profile.php"
                      target="blank"
                    >
                      <IoLogoFacebook className="me-4" />
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
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
  );
};

export default Nosotros;
