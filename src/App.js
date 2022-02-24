import { Navbar } from "./components";
import {
  Header,
  Hero,
  Customer,
  Vendor, 
  Footer,
  Share,TestimonyOne,TestimonyTwo
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />
      <Hero />
      <Customer />
      <TestimonyOne />
      <Vendor />
      <TestimonyTwo />
      <Footer />
    </div>
  );
}

export default App;
