import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderMobile, restockMobile } from "./mobileSlice";
import "./Mobile.css"; // Import your custom CSS for styling

function Mobile() {
  const mobiles = useSelector((state) => state.mobile);
  const dispatch = useDispatch();

  const [tempmobiles, settempmobiles] = useState(0);

  const handleOrder = () => {
    dispatch(orderMobile());
  };

  const handleRestock = () => {
    dispatch(restockMobile(parseInt(tempmobiles)));
    settempmobiles(0);
  };

  const mobileData = [
    {
      name: "iPhone 13",
      price: "23,999",
      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    },
    {
      name: "Samsung Galaxy S21 Ultra",
      price: "15,999",
      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/o/r/-original-imagu4haetzha9bj.jpeg?q=70",
    },
    {
      name: "Google Pixel 6A",
      price: "49,999",
      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70",
    },
  ];

  const mobileCards = mobileData.map((mobile, index) => (
    <div className="mobile-card" key={index}>
      <img src={mobile.imageUrl} alt={mobile.name} />
      <h3>{mobile.name}</h3>
      <p>Price: {mobile.price}</p>
      <div className="order-button-container">
        <button onClick={handleOrder}>Order Mobile</button>
      </div>
      <div className="restock-container">
        <input
          type="number"
          value={tempmobiles}
          onChange={(e) => settempmobiles(e.target.value)}
          placeholder="Restock quantity"
        />
        <button onClick={handleRestock}>Restock</button>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Mobiles</h1>
      <h2>Number of mobiles {mobiles.numberOfmobiles}</h2>
      <div className="mobile-card-grid">{mobileCards}</div>
    </div>
  );
}

export default Mobile;
