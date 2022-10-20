import '../styles/Navbar.css'
import logo from '../assets/images/browlen.png'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg pt-4 pb-4 navbar-browlen">
      <div className="container">
        <Link className="navbar-brand d-flex ms-2" to="/">
          <img src={logo} className='logo' />
          <h2 className='d-flex align-items-center ms-2'>Browlen</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <NavLink className="nav-link" style={isActive => ({
                color: isActive ? "#333" : "#9c0645"
              })} to="/">Inicio</NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink className="nav-link" style={isActive => ({
                color: isActive ? "#333" : "#9c0645"
              })} to="/productos">Productos</NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink className="nav-link" style={isActive => ({
                color: isActive ? "#333" : "#9c0645"
              })} to='/nosotros'>Nosotros</NavLink>
            </li>
          </ul>

          <button className="btn btn-outline-success" id='lastnav'>
            <div id='slide'></div>
              <a href="#" className='fw-bold '>Ordena ahora!</a>
            </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// activeStyle={{fontWeight:"bold",color:"red"}}
