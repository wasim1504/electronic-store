import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <p>Welcome to my Shop</p>

      <h2>Mobiles</h2>
      <div className="card-grid">
        <div className="mobile-card card">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"
            alt="IPhone 14"
          />
          <h3>iPhone 14 - Black</h3>
          <p>Price: 45,888</p>
        </div>

        <div className="mobile-card card">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70"
            alt="IPhone 14"
          />
          <h3>iPhone 14 - Pink</h3>
          <p>Price: 14,777</p>
        </div>

        <div className="mobile-card card">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70"
            alt="IPhone 14"
          />
          <h3>iPhone 14 - White</h3>
          <p>Price: 45,666</p>
        </div>
      </div>

      <h2>Laptops</h2>
      <div className="card-grid">
        <div className="laptop-card card">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/c/5/-original-imagtrj27kprghgz.jpeg?q=70"
            alt="Laptop 1"
          />
          <h3>Asus Rog</h3>
          <p>Price: 56,666</p>
        </div>

        <div className="laptop-card card">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/g/c/-original-imagp7pfkztgtg93.jpeg?q=70"
            alt="Laptop 2"
          />
          <h3>Mac Book</h3>
          <p>Price: 12,233</p>
        </div>

        <div className="laptop-card card">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/j/2/o/-original-imagtq47azeytzzg.jpeg?q=70"
            alt="Laptop 3"
          />
          <h3>HP Pro Book</h3>
          <p>Price: 45,666</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
