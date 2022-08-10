import Header from  "./components/Header";
import Button from "./components/Button";
import { Image } from "./components/Image";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";

function App(){
return (
  <div>
    <Navbar />
    <NavItem />
  <Header />
  <Button label="Add to Cart" />
  <Button label="Read more..." />
  <Button label="Register" />
  <Button label="Login" />

  <Image />
  </div>
);
}

export default App;
