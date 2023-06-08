import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import MyPage from "./pages/MyPage";
import Payment from "./pages/Payment";
import Sign from "./pages/Sign";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="payment" element={<Payment />} />
                <Route path="sign" element={<Sign />} />
            </Routes>
        </div>
    );
}

export default App;
