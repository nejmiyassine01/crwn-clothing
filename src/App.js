import "./App.css";
import HomePage from "./pages/homepage/Homepage.pages";
import ShopPage from "./pages/shop/shop.pages";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.components";

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
