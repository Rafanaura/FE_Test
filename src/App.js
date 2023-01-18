import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import {useState} from "react"
function App() {
  const {token, setToken} = useState(localStorage.getItem('userToken') ?? null)

  return (
    <div className="App">
      <Navbar/>
      {token ? <Home/> : <Login token={token} setToken={setToken}/>}
    </div>
  );
}

export default App;
