import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import useToken from "./hooks/useToken";

function App() {
  const [token] = useToken();

  console.log(token);
  return (
    <div className="App">
      <Routes>
        <Route index path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
