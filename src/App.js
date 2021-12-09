import './App.scss';
import {Route,Routes} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import AllComponent from "./AllComponent";

function App() {
  return (
      <div className="wrapper">


            <Routes>
                <Route path={'/'} element={<AllComponent/>}  exact/>
                <Route path={'/cart'} element={<Cart/>} excat />
            </Routes>

      </div>
  );
}

export default App;
