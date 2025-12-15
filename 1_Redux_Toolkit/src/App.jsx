// https://redux-toolkit.js.org/tutorials/quick-start
import Counter from "./components/Counter";
import CartIcon from "./components/CartIcon";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
    {/* <Counter/> */}


    {/* API +Thunk */}
    <div className="min-h-screen bg-gray-100">
      <nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 onClick={()=>navigate('/')} className="text-2xl font-bold cursor-pointer">MyShop</h1>
        <CartIcon />
      </nav>

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
    </>
  );
}
