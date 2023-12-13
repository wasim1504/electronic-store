import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import Layout from "./components/Layout.js";
import Mobile from "./components/Mobile/Mobile";
import Laptop from "./components/Laptop/Laptop";
import User from "./components/users/Userspage";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Layout />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/user" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
