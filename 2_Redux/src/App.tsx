import { useDispatch, useSelector } from "react-redux";
import {CARD_ADD_ITEM} from './store/actionTypes.js'


const App = () => {
  const products = useSelector((state: any) => state.products);
  const cart = useSelector((state: any) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Products</h1>

      {products.map((p:any) => (
        <div key={p.id}>
          {p.title}
          <button
            className="ml-4 border px-2"
            onClick={() =>
              dispatch({
                type: CARD_ADD_ITEM,
                payload: { productId: p.id }
              })
            }
          >
            Add Cart
          </button>
        </div>
      ))}

      <h2 className="mt-10">Cart Count: {cart.length}</h2>
    </div>
  );
};

export default App;
