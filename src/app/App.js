
import { Routes,Route } from 'react-router-dom';
import Header from '../components/header/Header';
import './App.css';
import HomePage from '../pages/Home/HomePage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage.jsx'
import BrandPage from '../pages/BrandPage/BrandPage.jsx'
import LookBookPage from '../pages/LookBookPage/LookBookPage.jsx';
import FavoritePage from '../pages/FavoritePage/FavoritePage.jsx';
import BasketPage from '../pages/BasketPage/BasketPage.jsx';
import ContactPage from '../pages/ContactPage/ContactPage';



function App() {
  return (
    <div className="App">
     
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/CatalogPage' element={<CatalogPage/>}/>
         <Route path='/DeliveryPage' element={<DeliveryPage/>}/>
         <Route path='/BrandPage' element={<BrandPage/>}/>
         <Route path='/LookBookPage' element={<LookBookPage/>}/>
         <Route path='/ContactPage' element={<ContactPage/>}/>
         <Route path='/FavoritePage' element={<FavoritePage/>}/>
         <Route path='/BasketPage' element={<BasketPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
