import { useSelector } from "react-redux";
import ItemList from "./ItemList";





const Cart=()=>{
const cartItems=useSelector((store)=>store.cart.items)


    return(
        <ItemList items={cartItems}/>
    )

}
export default Cart;
