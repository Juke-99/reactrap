import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App'

class Main extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		)
	}
}