import { Navbar } from "./components";
import {
  Header,
  Banner,
  Hero,
  Customer,
  Vendor,
  Footer,
  Share,
  Testimonials,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />
      <Hero />
      <Customer />
      <Testimonials />
      <Vendor />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
