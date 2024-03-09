import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

//publicly avilable routes: 
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";

// user protected pages:
import UserProfilePage from "./pages/user/UserProfilePage";
import UserCartdetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// Admin protected pages:
import AdminAnalaysticsPage from "./pages/admin/AdminAnalaysticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminUserPage from "./pages/admin/AdminUserPage";

function App() {
  return (
   <>
<BrowserRouter>
<HeaderComponent/>
<Routes>

  {/* publicly avilable routes:  */}

  <Route path="/" element={ <HomePage/>}/>
  <Route path="/product-list" element={ <ProductListPage/>}/>
  <Route path="/cart" element={ <CartPage/>}/>
  <Route path="/product-details/:id" element={ <ProductDetailsPage/>}/>
  <Route path="/register" element={ <RegisterPage/>}/>
  <Route path="/login" element={ <LoginPage/>}/>
  <Route path="*" element={ <h1>Page not exists 404</h1>}/>


{/* protected user routes:  */}
<Route element={<ProtectedRoutesComponent/>} admin={false}>
<Route path="/user" element={ <UserProfilePage/>}/>
  <Route path="/my-order" element={ <UserOrderPage/>}/>
  <Route path="/cart-details" element={ <UserCartdetailsPage/>}/>
  <Route path="/order-details" element={ <UserOrderDetailsPage/>}/>
</Route>

{/* Admin protected pages: */}

<Route element={<ProtectedRoutesComponent/>} admin={true}>
<Route path="/admin/users" element={ <AdminUserPage/>}/>
<Route path="/admin/edit-user" element={ <AdminUserPage/>}/>
<Route path="/admin/product" element={ <AdminProductPage/>}/>
<Route path="/admin/create-new-product" element={ <AdminCreateProductPage/>}/>
<Route path="/admin/orders" element={ <AdminOrdersPage/>}/>
<Route path="/admin/chats" element={ <AdminChatsPage/>}/>
<Route path="/admin/edit-product" element={ <AdminEditProductPage/>}/>
<Route path="/admin/edit-user" element={ <AdminEditUserPage/>}/>
<Route path="/admin/order-details" element={ <AdminOrderDetailsPage/>}/>
<Route path="/admin/analaystics" element={ <AdminAnalaysticsPage/>}/>


</Route>

</Routes>
<FooterComponent/>

</BrowserRouter>

  
   </>
  );
}

export default App;
