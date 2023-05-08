import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Prodcuts from "./pages/Prodcuts";
//Container
import PageContainer from "./containers/PageContainer";
//compoenets
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//reactslick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Navbar />
        <Routes>
          <Route index path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Prodcuts />} />
        </Routes>
        <Footer />
      </PageContainer>

      <ToastContainer />
    </div>
  );
}

export default App;
