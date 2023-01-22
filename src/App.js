import  { BrowserRouter as Router, Route, Routes   } from "react-router-dom";
import './App.css';
import Categories from "./component/categories";
import Instagram from "./component/Instagram";
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';
import Home from './views/Home';
import Login from "./views/login";
import Product from "./views/Product";
import Registre from "./views/registre";
import Shop from "./views/Shop";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
        <Routes>
          <Route>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path="/shoping" element={<Shop></Shop>}></Route>
          <Route path="/Pro" element={<Product></Product>}></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/registre" element={<Registre></Registre>}></Route>


        </Routes>
        <Instagram></Instagram>
        <Footer></Footer>
      </Router>
      

    </div>
  );
}

export default App;
