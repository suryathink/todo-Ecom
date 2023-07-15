import './App.css';
import TodoList from './Components/Todo/TodoList';
import NavbarComponent from './Components/Navbar';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <NavbarComponent/>
     {/* <TodoList/> */}

     <Routes>
        {/* <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
        <Route path="/Todo/todo" element={ <TodoList/> } />
      </Routes>
    </div>
  );
}

export default App;
