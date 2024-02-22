import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../listitem/ProductCard';

export default function () {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsData = async () => {
    let URL = 'https://fakestoreapi.com/products';
    let response = await axios.get(URL);
    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchProductsData();
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <h2 className='text-center'>Products details</h2>
        <div className='row'>
          {
            isLoading ?
              <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              :
              products.map((product) => {
                return <ProductCard product={product} />
              })
          }
        </div>
      </div>
    </>
  )
}
