import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={ <HomePage/>}/>
  <Route path="/product-list" element={ <ProductListPage/>}/>
  <Route path="/cart" element={ <CartPage/>}/>
  <Route path="/product-details/:id" element={ <ProductDetailsPage/>}/>
  <Route path="/register" element={ <RegisterPage/>}/>
  <Route path="/login" element={ <LoginPage/>}/>
  <Route path="*" element={ <h1>Page not exists 404</h1>}/>
</Routes>
</BrowserRouter>

  
   </>
  );
}

export default App;
