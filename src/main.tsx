import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import SearchProvider from './provider/SearchProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<SearchProvider>
			<App />
		</SearchProvider>
	</BrowserRouter>
)
