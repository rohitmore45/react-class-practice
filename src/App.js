import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import MyInterceptor1, { requestStartedInterceptor, responseReceivedInterceptor } from './utils/MyInterceptor1';

function App() {
  // interceptors
  MyInterceptor1();
  // requestStartedInterceptor();
  // responseReceivedInterceptor();

  // let userName = prompt("enter your name")
  let name = "Rohit More"
  return <div>
    {/* <Header /> */}
    <Navbar />
    <Main name={name} />
    {/* <Footer /> */}
  </div>
}

export default App;
