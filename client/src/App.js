import './App.css';
import Landing from './components/Landing';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInscription from './components/TeamInscription';
import PlayerInscription from './components/PlayerInscription';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/inscription" component={TeamInscription} />
					<Route
						exact
						path="/inscription/players"
						component={PlayerInscription}
					/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
