import logo from './logo.svg';
// import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
// import View from "./pages/View";
import Skills from "./pages/Skills";
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Work" element={<Work/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
        {/* <Route path="/view" element={<View/>}/> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
