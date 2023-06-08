import './assets/global.scss'
import Header from './components/Header/Header'
import Router from './Router/Router'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Header/>
			<Router/>
		</div>
	)
}

export default App
