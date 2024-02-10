import React, { useState } from 'react'
import productsArr from '../listitem/products.json'
import SearchBar from 'react-js-search'

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(productsArr);
  let handleAsc = () => {
    let sortedProducts = filteredProducts.sort((p1, p2) => p1.price - p2.price)
    setFilteredProducts([...sortedProducts])
  }

  let handleDsc = () => {
    let sortedProducts2 = filteredProducts.sort((p1, p2) => p2.price - p1.price);
    setFilteredProducts([...sortedProducts2])
  }
  return <>
    <h2 className='text-start mb-2 text-danger'>Products List :</h2>

    <div className='row m-3 input-group m-5'>
      <div className='col-sm-8 input-group-text'>
        <SearchBar
          onSearchTextChange={(term, filteredData) => {
            return setFilteredProducts([...filteredData])
          }}
          // onSearchButtonClick={onSearchClick}
          placeHolderText={"Search here..."}
          data={productsArr}
        />
        <div className='col-sm-4'>
          <button onClick={handleAsc}>Asc Order</button>
          <button onClick={handleDsc}>Desc Order</button>
        </div>
      </div>

    </div>

    <div className='container-fluid'>
      <div className='row'>
        {
          filteredProducts.map((product) => {
            let { id, image, category, description, price } = product;
            return <div className='col-sm-3 mb-1' key={id}>
              <div className="card"  >
                <img className="card-img-top " height={200} width={200} src={image} alt="Card image cap" />
                <div className="card-body text-center ">
                  <h4 className="card-title">{category}</h4>
                  <h6 className="card-title">${price}</h6>
                  <p className="card-text text-truncate " title={description}>{description}</p>
                  <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
              </div>
            </div>
          })
        }

      </div>
    </div>

  </>
}
