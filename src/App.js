import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
   <div>
       <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/apt" element={<Appointment />} />*/}
      </Routes>
      {/*<Contact />
      <Footer />*/}
    </BrowserRouter>
    </div>
  );
}

export default App;
