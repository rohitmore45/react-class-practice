import React from 'react'
import './Categories.css'
import propTypes from 'prop-types'

export default function Category(props) {
  return <>
    <div className='col' style={{ marginTop: 80 }}>
      <div className='category text-center'>
        <img src={props.img} alt='sometext' />
        <div>{props.name}</div>
      </div>
    </div>
  </>
}
Category.propTypes = {
  name: propTypes.string,
  img: propTypes.string.isRequired
}
// proptypes used for ensuring that whether parent component passing data and if passing then it will check if it right or wrong