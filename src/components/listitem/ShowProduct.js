import React from 'react'
import products from './products.json'
import ProductCard from './ProductCard'

export default function ShowProduct() {
  return <>
    <h2 className='text-start mb-2 text-danger'>Products List :</h2>
    <div className='container-fluid'>
      <div className='row'>
        {products.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>
    </div>

  </>
}

