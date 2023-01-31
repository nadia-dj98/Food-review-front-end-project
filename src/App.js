import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer';
import ContactUs from './components/ContactUs';
import WhoWeAre from './components/WhoWeAre';
import OurMission from './components/OurMission';

function App() {
  return (
    <>
     <RestaurantContainer />
      <BrowserRouter>
      <Routes> 

        <Route path='/ContactUs' element={<ContactUs/>}/> 
        <Route path='/WhoWeAre' element={<WhoWeAre/>}/> 
        <Route path='/OurMission' element={<OurMission/>}/> 

      </Routes>

      <footer >
          <h4> About Best Byte</h4>
          <li><Link to="/ContactUs">Contact us</Link></li>
          <li><Link to="/WhoWeAre">Who we are</Link> </li>
          <li><Link to="/OurMission">Our mission</Link></li>
        </footer>
       </BrowserRouter>
    </>
  );
}

export default App;
