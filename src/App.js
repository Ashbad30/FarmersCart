import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import BasicMenu from './components/Nav/nav';
import navData from './components/Nav/navaData';
import Utility from './Pages/Utilities/Utilities';
import Overview from './Pages/Overview/Overview/Overview';
import Home from './Pages/Home/Home';
import Manure from './Pages/Manure/Manure';
import Seeds from './Pages/Seeds/Seeds';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>

        <div className='zenith-header'>
          <div className='zenith-home-Heading'>Farmaholic</div>
          <div className='zenith-header-subtitle'>One Stop Solution For Farming Needs</div>
          <BasicMenu details = {navData}/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Manure' element={<Manure/>}></Route>
          <Route path='/Seeds' element={<Seeds/>}></Route>
          <Route path='/About' element={<AboutUs/>}></Route>
          <Route path='/ContactUs' element={<ContactUs/>}></Route>
          
          <Route path='/RoadMap' element={<Overview />}></Route>
       
          <Route path='/Customer' element={<h1>ye hai customer page</h1>}></Route>
          <Route path='/Utility' element={<Utility/>}></Route>
          
        </Routes>

      </BrowserRouter>
<pressRelease/>
      <Footer />
    </div>
  )
}

export default App;