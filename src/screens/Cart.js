import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import "./Cart.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  // const [orders, setOrders] = useState([]);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const orders = [...cart];
  
  const charges = 30;
  const totalPrice = total + charges
  const dispatch = useDispatch();
  const incrementItemQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decrementItemQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const navigate = useNavigate();
  const placeOrder = (item) => {
    toast.success("🦄 Order placed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/orders",{
        state:{
          orders:orders,
          totalPrice:totalPrice,
        }
      })
    },3500);

    setTimeout(() =>{
      dispatch(cleanCart());
    },4000)
    
    
  };
  return (
    <>
      <Header />
      <div className="cart">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Left part */}
        <div className="cartLeft">
          {cart.map((item, index) => (
            <div className="cartContainer">
              {/* image */}
              <div>
                <img src={item.image} style={{ width: 100, height: 100 }} />
              </div>

              {/* description */}
              <div className="cartDescription">
                <p>
                  {item.title.length > 60
                    ? item.title.substr(0, 60)
                    : item.title}
                </p>
                <p style={{ marginTop: 8 }}>
                  {item.description.length > 80
                    ? item.description.substr(0, 80)
                    : item.description}
                </p>
                <p style={{ marginTop: 8 }}>{item.price}</p>
              </div>

              {/* Buttons */}
              <div className="cartButtonContiner">
                <div className="cartButtons">
                  <div
                    onClick={() => decrementItemQuantity(item)}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </div>

                  <div>{item.quantity}</div>

                  <div
                    onClick={() => incrementItemQuantity(item)}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </div>
                </div>
                <button
                  onClick={() => removeItemFromCart(item)}
                  className="cartButton"
                >
                  Remove Item
                </button>
                <h5 style={{ marginTop: 7 }}>{item.price * item.quantity}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Right part */}
        {total === 0 ? (
          <div>
            <h2>Your Cart Is empty</h2>
          </div>
        ) : (
          <div className="cartRight">
            {/* Location info and button */}
            <div className="cartRightLocationContainer">
              <div className="cartRightLocation">
                <LocationOnIcon style={{ color: "gray" }} />
                <div className="cartRightDesciption">
                  <p className="cartRightText">Select Your Location</p>
                  <p className="cartRightText">
                    Please Select a location so we can find you!
                  </p>
                  <button className="cartRightButton">Select Location</button>
                </div>
              </div>

              <div className="cartRightLocation">
                <LocationOnIcon style={{ color: "gray" }} />
                <div className="cartRightDesciption">
                  <p className="cartRightText">Choose your saved location</p>

                  <button className="cartRightButton">Choose Location</button>
                </div>
              </div>
            </div>

            {/* Coupon info and description */}
            <div className="cartRightCoupon">
              <ConfirmationNumberIcon style={{ color: "gray" }} />
              <div style={{ marginLeft: 10 }}>
                <h4 className="cartRightCouponText">Select / Apply Coupon</h4>
                <p className="cartRightCouponsmall">
                  Apply coupons to avail offers on the products
                </p>
              </div>
            </div>

            {/* Container for the checkout and the total  */}

            <div className="cartRightCheckout">
              <div className="cartRightChekoutpart">
                <h5>Total Price</h5>
                <h5>{total}</h5>
              </div>

              <div className="cartRightChekoutpart">
                <h5>Discount</h5>
                <h5>-</h5>
              </div>

              <div className="cartRightChekoutpart">
                <h5>charges</h5>
                <h5>{charges}</h5>
              </div>

              <div className="cartRightChekoutpart">
                <h3>Grand Total</h3>
                <h3>{total + 30}</h3>
              </div>
            </div>

            <button onClick={placeOrder} className="cartRightCheckoutButton">
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
