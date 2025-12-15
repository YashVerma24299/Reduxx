import { useSelector } from "react-redux";
import { ShoppingCart } from 'lucide-react'
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const {items} = useSelector((state) => state.cart);
  console.log(items)
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer" onClick={()=>navigate('/cart')}>
      <span className="text-2xl"><ShoppingCart size={22}/></span>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h- flex items-center justify-center text-xs font-semibold">
        {items.length}
      </span>
    </div>
  );
};

export default CartIcon;
