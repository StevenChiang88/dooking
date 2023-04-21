import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import Hotels from "./pages/hotels/Hotels";
import Hotel from "./pages/hotel/Hotel";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
