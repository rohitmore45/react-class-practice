import React from 'react';
import './Main.css'
// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jfif';
// import img3 from './images/img3.jfif'

import Carousel from '../carousel/Carousel'
import ShowProduct from '../listitem/ShowProduct'
import ListDemo1 from '../listitem/ListDemo1'
import ListDemo2 from '../listitem/ListDemo2'
import CountryList from '../listitem/CountryList'
import UserList from '../listitem/UserList'
import ConditionalDemo1 from '../conditional/ConditionalDemo1'
import ConditionalDemo2 from '../conditional/ConditionalDemo2'
import ConditionalDemo3 from '../conditional/ConditionalDemo3'
import CounterDemo1 from '../state/CounterDemo1'
import CounterDemo2 from '../state/CounterDemo2'
import GreetDemo1 from '../props/GreetDemo1';
import Categories from '../categories/Categories';
import MyModal from '../modal/MyModal';
import Addition from '../props/Addition';
import StateDemo1 from '../state/StateDemo1';
import ToggleDemo1 from '../state/ToggleDemo1';
import ToggleDemo2 from '../state/ToggleDemo2';
import PasswordDemo1 from '../state/PasswordDemo1';
import RemainingChar from '../state/RemainingChar';
import StateDropdown from '../state/StateDropdown';
import Folder from '../fileexplorer/Folder';
import folderData from '../fileexplorer/folderData.json'
import Folder2 from '../fileexplorer/Folder2';
import SweetAlert from '../sweetAlert/SweetAlert';
import ReactModal from '../react-modal/ReactModal';
import ProductList from '../search functionality/ProductList';
import PureDemo1 from '../pure-component/PureDemo1';
import PureDemo2 from '../pure-component/PureDemo2';
import MemoParent from '../react-memo/MemoParent';
import MemoParent2 from '../react-memo/MemoParent2';


export default function Main(props) {
  // return <div className='container'>
  //   <div className="card mycard">
  //     <img src={img1} className="card-img-top" alt="..." />
  //     <div className="card-body">
  //       <h5 className="card-title">Nature</h5>
  //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       <a href="#" className="btn btn-primary">View more..</a>
  //     </div>
  //   </div>
  //   <div className="card mycard">
  //     <img src={img2} className="card-img-top" alt="..." />
  //     <div className="card-body">
  //       <h5 className="card-title">Nature</h5>
  //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       <a href="#" className="btn btn-danger">View more..</a>
  //     </div>
  //   </div>
  //   <div className="card mycard">
  //     <img src={img3} className="card-img-top" alt="..." />
  //     <div className="card-body">
  //       <h5 className="card-title">Nature</h5>
  //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       <a href="#" className="btn btn-warning">View more..</a>
  //     </div>
  //   </div>
  //   <div>
  //     <button className="btn btn-success" type="button" disabled>
  //       <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  //       Loading...
  //     </button>
  //   </div>
  // </div>
  return <>
    <Categories />
    {/* <Carousel /> */}
    {/* <ShowProduct /> */}
    {/* <ListDemo1/> */}
    {/* <ListDemo2 /> */}
    {/* <CountryList /> */}
    {/* <UserList /> */}
    {/* <ConditionalDemo1 /> */}
    {/* < ConditionalDemo2 />
      <ConditionalDemo3 /> */}
    {/* <CounterDemo1 /> */}
    {/* <CounterDemo2 /> */}
    {/* <GreetDemo1 name='rohit' msg='good morning'>
      <div>This Content goes to child component</div>
    </GreetDemo1> */}
    {/* <MyModal>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </MyModal> */}

    {/* <MyModal name={props.name}>
      <>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <th>rohit</th>
              <th>rohit</th>
              <th>rohit</th>
              <th>rohit</th>
            </tr>
            <tr>
              <td>45</td>
              <td>45</td>
              <td>45</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
        <p>
          rohit score card
        </p>
      </>
    </MyModal> */}

    {/* <Addition num1={10} /> */}
    {/* <StateDemo1 /> */}
    {/* <ToggleDemo1 /> */}
    {/* <ToggleDemo2 /> */}
    {/* <PasswordDemo1 /> */}
    {/* <RemainingChar /> */}
    {/* <StateDropdown /> */}
    {/* <Folder folderInfo={folderData} /> */}
    {/* <Folder2 folderInfo={folderData} /> */}
    {/* <SweetAlert /> */}
    {/* <ReactModal /> */}
    {/* <ProductList /> */}

    {/* 14-2-2024 */}
    {/* <PureDemo1 /> */}
    {/* <PureDemo2 /> */}
    {/* <MemoParent /> */}
    <MemoParent2 />


  </>
}
