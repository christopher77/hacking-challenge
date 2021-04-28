import { Router } from "@reach/router";
import "./App.css";
import Auto from "./views/Auto/Auto";
import Home from "./views/Home/Home";
import Plan from "./views/Plan/Plan";
import Success from "./views/Success/Success";

function App() {
	return (
		<Router>
			<Success path="/success" />
			<Home path="/" />
			<Auto path="/auto" />
			<Plan path="/plan" />
		</Router>
	);
}

export default App;
