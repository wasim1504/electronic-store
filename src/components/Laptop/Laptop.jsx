import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderLaptop, restockLaptop } from "./laptopSlice";
import "./Laptop.css"; // Import your custom CSS for styling

function Laptop() {
  const laptops = useSelector((state) => state.laptop);
  const dispatch = useDispatch();

  const [tempLaptops, setTempLaptops] = useState(0);

  const handleOrder = () => {
    dispatch(orderLaptop());
  };

  const handleRestock = () => {
    dispatch(restockLaptop(parseInt(tempLaptops)));
    setTempLaptops(0);
  };

  const laptopData = [
    {
      name: "Asus vivobook",
      price: "55,000",
      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/k/x/-original-imagtvq8w2nsamdh.jpeg?q=70",
    },
    {
      name: "Acer Inspire",
      price: "89,888",
      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/khdqnbk0/computer/f/y/t/apple-original-imafxfyqydgvrkzv.jpeg?q=70",
    },
    {
      name: "Dell Inspiron",
      price: "70,999",
      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/k5r2mq80/computer/u/7/4/hp-probook-440-g6-business-laptop-original-imafzd92fsdmhkdq.jpeg?q=70",
    },
  ];

  const laptopCards = laptopData.map((laptop, index) => (
    <div className="laptop-card" key={index}>
      <img src={laptop.imageUrl} alt={laptop.name} />
      <h3>{laptop.name}</h3>
      <p>Price: {laptop.price}</p>
      <div className="order-button-container">
        <button onClick={handleOrder}>Order Laptop</button>
      </div>
      <div className="restock-container">
        <input
          type="number"
          value={tempLaptops}
          onChange={(e) => setTempLaptops(e.target.value)}
          placeholder="Restock quantity"
        />
        <button onClick={handleRestock}>Restock</button>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Laptops</h1>
      <h2>Number of laptops - {laptops.numberOflaptops}</h2>
      <div className="laptop-card-grid">{laptopCards}</div>
    </div>
  );
}

export default Laptop;
