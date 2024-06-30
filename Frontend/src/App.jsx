// import React, { useState } from 'react'
// import Home from './pages/Home/Home'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './pages/Cart/Cart'
// import LoginPopup from './components/LoginPopup/LoginPopup'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import TableDetails from './components/TableDetails/TableDetails'
// import ExploreMenu from './components/ExploreMenu/ExploreMenu'
// // import MyOrders from './pages/MyOrders/MyOrders'

// const App = () => {

//   const [showLogin,setShowLogin] = useState(false);

//   return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin}/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/cart' element={<Cart/>}/>
//           <Route path='/order' element={<PlaceOrder/>}/>
//           <Route path='/menu' element={<ExploreMenu/>}/>


//           <Route path='/myTable' element={<TableDetails/>}/>
//         </Routes>
//       </div>
//       <Footer />
      
//     </>
//   )
// }

// export default App



import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import TableDetails from './components/TableDetails/TableDetails';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
// import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/menu' element={<ExploreMenu />} />
          <Route path='/myTable' element={<TableDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
