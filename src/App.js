import "./App.css";
import HomePage from "./pages/homepage/Homepage.pages";
import ShopPage from "./pages/shop/shop.pages";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
