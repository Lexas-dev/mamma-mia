import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";
import { UserContext, UserProvider } from "./context/UserContext";

const AppRoutes = () => {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
      <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App;