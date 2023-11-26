import React from 'react' 
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom";
import Dashboard from './pages/admin/dashboard/Dashboard';
import Nopage from './pages/nopage/Nopage';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import Productinfo from './pages/Productinfo/productinfo';
import AddProduct from './pages/page/AddProduct';
import UpdateProduct  from './pages/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';

function App() {
  return (
    <MyState>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>
        }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/> 
        </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addproduct" element={
          <ProtectedRoute>
            <AddProduct/>
          </ProtectedRoute>
        }/>
        <Route path="/updateproduct" element={
          <ProtectedRoute>
            <UpdateProduct/>
          </ProtectedRoute>
        }/>
        <Route path="productinfo/:id" element={<Productinfo/>}/>
        <Route path="/*" element={<Nopage/>}/>
      </Routes>
      <ToastContainer/>
     </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user) {
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if(admin.user.email === 'sonu@gmail.com') {
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}