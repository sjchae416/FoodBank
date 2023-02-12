import * as React from 'react';
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
import Register from './Pages/registerPage';




function App() {
	const [value, setValue] = React.useState(0);
	const [hide, setHide] = React.useState(0)
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value)
	};

  return (
    <BrowserRouter>
			<Routes>
				<Route path={"/login"} element={<Login setHide={setHide} value={value} handleChange={handleChange} />} />
				<Route path={"/register"} element={<Register setHide={setHide} />} />
				<Route path={"/profile"} element={<Profile />} />
				<Route path={"/home"} element={<Home />} />
				<Route path={"/progress"} element={<Progress />} />
				<Route path={"/provH"} element={<ProviderHistory />} />
				<Route path={"/modal"} element={<HistoryModal />} />
				<Route path="/bank" element={<BankHome />} />
				<Route path={"/bankH"} element={<BankHistory />} />
			</Routes>

			{/* {((value === 0 || value === 1) && hide!==2) && <NavBottom userValue={value} /> */}
			<NavBottom userValue={value} />
			
		</BrowserRouter>
  );
}

export default App;
