import React, { useState } from 'react'
import '../styles/category/category.css'
import categories from '../data/categories'

const Category = () => {

  const [data, setData] = useState(categories.slice(0, 6))
  const filterItem = (categoryItem) => {
    const result = categories.filter((currentData) => {
      return currentData.category === categoryItem;
    });
    setData(result);
  }

  return (
    <div className='our-pro'>
      <div className="text-center">
        <h2 className='py-5 user-select-none fw-bold'>Productos</h2>
      </div>
      <section className="container">
        <h3 data-aos="zoom-out-down" className='text-center fs-1 py-5 fw-bold'>Catálogo de productos</h3>
        <div className="row text-center">

          <h5 data-aos="zoom-in" className='mb-3 fw-bold'>Categorías</h5>

          <div className='row-inputs pb-5' data-aos="zoom-in">
            {/* <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1"
                onClick={() => setData(categories)} defaultChecked />
              <label className="form-check-label fw-bold" htmlFor="inlineRadio1">Todo</label>
            </div> */}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2"
                onClick={() => filterItem('brownies')} defaultChecked />
              <label className="form-check-label fw-bold" htmlFor="inlineRadio2">Brownies</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" defaultValue="option4"
                onClick={() => filterItem('muffin')} />
              <label className="form-check-label fw-bold" htmlFor="inlineRadio4">Muffins</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" defaultValue="option6"
                onClick={() => filterItem('toppings')} />
              <label className="form-check-label fw-bold" htmlFor="inlineRadio6">Toppings</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3"
                onClick={() => filterItem('otros')} />
              <label className="form-check-label fw-bold" htmlFor="inlineRadio3">Otros</label>
            </div>
          </div>

          <div className="row m-auto">

            {data.map((values) => {
              const { id, title, price, image } = values
              return (
                // <>
                <div className="col-md-4 mb-4" key={id} data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">

                  <div  className="card-container border shadow-sm p-3 rounded">
                    <img src={image} className="card-img-top img-card" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title pt-3">{title}</h5>
                      <p className="card-text py-2">Some quick example text to build on the card.</p>
                      <p className='fw-bold text-black-50 mt-0'>S/ {price}</p>
                      <button className="btn btn-products">Ordenar</button>
                    </div>
                  </div>

                </div>
                // </>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Category
