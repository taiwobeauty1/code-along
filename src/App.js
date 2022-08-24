// import Header from  "./components/Header";
// import Button from "./components/Button";
// import { Image } from "./components/Image";
// import Navbar from "./components/Navbar";
// import NavItem from "./components/NavItem";
// import Practice from "./components/Practice";
// import TaskManager from "./components/TaskManager"
// import Form from "./components/Form";
// import Spinner from "./components/Spinner";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
return (
  <BrowserRouter>
  <Navbar />
  <Routes >
  <Route path="/" element={<Home />} />
  <Route path="/task-manager" element={<TaskManager />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/products/:productId" element={<ProductDetails />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
);
}

export default App;
