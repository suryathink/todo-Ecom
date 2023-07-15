import './App.css';
import TodoList from './Components/Todo/TodoList';
import NavbarComponent from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import ApiIntegrationPage from './Components/Ecom/ApiIntegrationPage';

function App() {
  return (
    <div className="App">
    <NavbarComponent/>
     {/* <TodoList/> */}

     <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="about" element={ <About/> } /> */}
        {/* <Route path="contact" element={ <Contact/> } />  */}
        <Route path="/todo" element={ <TodoList/> } />
        <Route path="/products" element={ <ApiIntegrationPage/> } />
      </Routes>
    </div>
  );
}

export default App;
