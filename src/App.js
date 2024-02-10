import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
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
