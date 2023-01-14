import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import OrderScreen from "./screens/OrderScreen";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orders" element={<OrderScreen/>}/>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
