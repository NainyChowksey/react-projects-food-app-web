import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  const cartLength=useSelector((store)=>store.cart.items)
  const online = useOnlineStatus();


  return (
    <div className="flex justify-between mb-2 shadow-md">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="m-4 p-4">
        <ul className="flex m-2 p-4">
          <li className="px-4">Online Status: {online ? "✅" : "🔴"}</li>
          <Link to="/"><li  className="px-4">Home</li></Link>
          <li className="px-4">About Us</li>
          <li className="px-4">Contact Us</li>
          <Link to="grocery"><li className="px-4">Grocery</li></Link>
          <Link to="cart"><li className="px-4 text-xl">Cart({cartLength.length})</li></Link>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
