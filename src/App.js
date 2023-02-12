import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Progress from './Pages/Progress';
import ProviderHistory from './Pages/ProviderHistory'
import imageFood from './img/poke_bowl.jpg'
import NavBottom from "./Components/NavBottom"
import HistoryModal from './Components/HistoryModal';
import BankHistory from './Pages/BankHistory';
import Profile from "./Pages/profilePage"
import BankHome from './Pages/BankHome';

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Home />}/>
        <Route path="/progress" element={<Progress />} />
				<Route path={"/provH"} element={<ProviderHistory />}/>
				<Route path={"/modal"} element={<HistoryModal />} />
				<Route path={"/profile"} element={<Profile />} />
				<Route path="/bank" element={<BankHome />} />
				<Route path={"/bankH"} element={<BankHistory />} />
				
				<Route path="*" element={<Login />} />
        
			</Routes>
			<NavBottom/>
		</BrowserRouter>
  );
}

export default App;
