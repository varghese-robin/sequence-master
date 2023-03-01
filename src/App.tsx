/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";
import Sequences from "./Pages/Sequences/Sequences";
import NewSequence from "./Pages/NewSequence/NewSequence";

function App() {
	return (
		<>
			<Header />
			<div className='appBody'>
				<Routes>
					<Route path='/' element={<Sequences />} />
					<Route path='/sequences' element={<Sequences />} />
					<Route path='/new-sequence' element={<NewSequence />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
