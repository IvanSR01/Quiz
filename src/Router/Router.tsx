import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Item from '../components/Item/Item'

const Router: React.FC  = () => {
	return (
		<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/quiz/:id' element={<Item/>} />
		</Routes>
	)
}

export default Router 
