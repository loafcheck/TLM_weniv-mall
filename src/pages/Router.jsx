import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import CartPage from "./Cart";

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
}

export default Router;