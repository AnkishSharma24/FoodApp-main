import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

return(
    <div className="text-center ">
        <h1 className="text-2xl m-4 font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}></ItemList>
            <button onClick={handleClearCart} className="bg-black text-white rounded-lg p-2">Clear Cart</button>
        </div>
    </div>
)
}

export default Cart;