import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ChoosePokemon from './views/ChoosePokemon.jsx';
import Battle from './views/Battle.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
	{
		path: '/',
		element: <ChoosePokemon />
	},
	{
		path: '/battle/:pokemon',
		element: <Battle />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
)