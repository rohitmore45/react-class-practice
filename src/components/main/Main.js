import React from 'react';

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
import EventDemo1 from '../react-event/EventDemo1';
import EventDemo2 from '../react-event/EventDemo2';
import EventDemo3 from '../react-event/EventDemo3';
import EventDemo4 from '../react-event/EventDemo4';
import EventDemo5 from '../react-event/EventDemo5';
import HttpDemo1 from '../HTTP/HttpDemo1';
import HttpDemo2 from '../HTTP/HttpDemo2';
import HttpDemo3 from '../HTTP/HttpDemo3';
import HttpDemo4 from '../HTTP/HttpDemo4';
import HttpDemo5 from '../HTTP/HttpDemo5';
import FakeStore from '../HTTP/FakeStore';
import ClickCounter from '../HOC/ClickCounter';
import HoverCounter from '../HOC/HoverCounter';
import { Route, Routes } from 'react-router-dom';
import Home from '../routing/Home'
import Careers from '../routing/Careers'
import AboutUs from '../routing/AboutUs'
import ContactUs from '../routing/ContactUs'
import NotFound from '../routing/NotFound'
import Products from '../routing/Product';
import ProductDetails from '../routing/ProductDetails';
import Users from '../routing/Users';
import UserDetails from '../routing/UserDetails';




export default function Main(props) {

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

    {/* 12-2-2024 */}
    {/* <EventDemo1 /> */}
    {/* <EventDemo2 /> */}
    {/* <EventDemo3 /> */}
    {/* <EventDemo4 /> */}
    {/* <EventDemo5 /> */}

    {/* 14-2-2024 */}
    {/* <PureDemo1 /> */}
    {/* <PureDemo2 /> */}
    {/* <MemoParent /> */}
    {/* <MemoParent2 /> */}

    {/* 21-2-2024 */}
    {/* <HttpDemo1 /> */}
    {/* <HttpDemo2 /> */}
    {/* <HttpDemo3 /> */}
    {/* <HttpDemo4 /> */}
    {/* <HttpDemo5 /> */}
    {/* <FakeStore /> */}

    {/* 23-2-2024 */}
    {/* <ClickCounter /> */}
    {/* <HoverCounter /> */}

    {/* 24-2-2024 */}
    <Routes>
      <Route exact path={'/'} element={<Home />} />
      <Route exact path={'/home'} element={<Home />} />
      <Route exact path={'/careers'} element={<Careers />} />
      <Route exact path={'/aboutus'} element={<AboutUs />} />
      <Route exact path={'/contactus'} element={<ContactUs />} />
      <Route exact path={'/products'} element={<Products />} />
      <Route exact path={'/productdetails/:id'} element={<ProductDetails />} />
      <Route exact path={'/users'} element={<Users />} />
      <Route exact path={'/userdetails'} element={<UserDetails />} />
      <Route exact path={'*'} element={<NotFound />} />
    </Routes>



  </>
}
