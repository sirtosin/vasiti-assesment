import { Navbar } from "./components";
import {
  Header,Home,
  Footer
} from "./containers";
import "./App.css";
import { BrowserRouter ,Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
