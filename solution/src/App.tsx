import './App.css';
import { Home } from './pages/home';
import { Provider } from './provider';

function App() {
	return (
		<Provider>
			<Home />
		</Provider>
	);
}

export default App;
