import React, { useState } from 'react'
import productsArr from '../listitem/products.json'
import { Link } from 'react-router-dom';


export default function Products() {
  return <>
    <h2 className='text-start mb-2 text-danger'>Products List :</h2>

    {/* <div className='row m-3 input-group m-5'>
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

    </div> */}

    <div className='container-fluid'>
      <div className='row'>
        {
          productsArr.map((product) => {
            let { id, image, category, description, price } = product;
            return <div className='col-sm-3 mb-1' key={id}>
              <div className="card"  >
                <img className="card-img-top " height={200} width={200} src={image} alt="Card image cap" />
                <div className="card-body text-center ">
                  <h4 className="card-title">{category}</h4>
                  <h6 className="card-title">${price}</h6>
                  <p className="card-text text-truncate " title={description}>{description}</p>
                  {/* <a className="btn btn-link"> */}
                  <Link to={`/productdetails/${id}`}>view</Link>
                  {/* </a> */}
                </div>
              </div>
            </div>
          })
        }

      </div>
    </div>

  </>
}

