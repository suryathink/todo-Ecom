import './App.css';
import TodoList from './Components/Todo/TodoList';
import NavbarComponent from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import ApiIntegrationPage from './Components/Ecom/ApiIntegrationPage';
import Cart from './Components/Ecom/Cart';
import AboutPage from './Components/Ecom/About';
function App() {
  return (
    <div className="App">
    <NavbarComponent/>

     <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="contact" element={ <Contact/> } />  */}
        <Route path="/todo" element={ <TodoList/> } />
        <Route path="/products" element={ <ApiIntegrationPage/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/about" element={ <AboutPage/> } />
      </Routes>
    </div>
  );
}

export default App;
