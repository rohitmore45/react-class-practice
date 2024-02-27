import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data)
  }

  useEffect(() => {
    fetchProductDetails()
  }, [])
  return (
    <div className='col-sm-3 col-offset-3 m-auto' key={product.id}>
      <h1 className='text-center text-info'>Product Details</h1>
      <button onClick={() => navigate(-1)} className='btn btn-warning btn-sm w-50'>Back</button>
      <div className="card mt-1"  >
        <img className="card-img-top " height={200} width={200} src={product.image} alt="Card image cap" />
        <div className="card-body text-center ">
          <h4 className="card-title">{product.category}</h4>
          <h6 className="card-title">${product.price}</h6>
          <p className="card-text  " title={product.description}>
            {product.description}</p>
        </div>
      </div>
    </div>
  )
}
