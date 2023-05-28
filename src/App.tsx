import './assets/global.scss'
import Header from './components/Header/Header'
import Router from './Router/Router'
import React from 'react'

const App: React.FC = () => {
	React.useEffect(() => {
		alert('Ответы на вопросы могут не совподать.(Дату заполнял спустя рукова)')
	}, [])
	return (
		<div>
			<Header/>
			<Router/>
		</div>
	)
}

export default App
