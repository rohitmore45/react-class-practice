import React from 'react'

export default function ProductCard({ product }) {
  let { id, image, category, description, price } = product;
  return <>
    <div className='col-sm-3 mb-4'>
      <div className="card" key={id} >
        <img className="card-img-top " height={200} width={200} src={image} alt="Card image cap" />
        <div className="card-body text-center ">
          <h4 className="card-title">{category}</h4>
          <h6 className="card-title">${price}</h6>
          <p className="card-text text-truncate" title={description}>{description}</p>
          <a href="#" className="btn btn-outline-primary">Buy Now</a>
        </div>
      </div>
    </div>
  </>
}
