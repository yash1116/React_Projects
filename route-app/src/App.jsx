import logo from "./logo.svg";
import "./App.css";
// import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Fourpointone from "./Fourpointone";
import NoMatch from "./NoMatch";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React Router Class</h2>
			</header>
			{/* <Link to="/One">One</Link>
					<Link to="/Two">Two</Link>
					<Link to="/Three">Three</Link>
					<Link to="/Four">Four</Link> */}
			<Routes>
				<Route path="/" component={App}></Route>
				<Route path="/One" component={One}></Route>
				<Route path="/Two" component={Two}></Route>
				<Route path="/Three" component={Three}></Route>
				<Route path="/Four" component={Four}>
					<Route path="/Four/:id" component={Fourpointone} />
				</Route>
				<Route path="*" component={NoMatch}></Route>
			</Routes>
		</div>
	);
}

export default App;
