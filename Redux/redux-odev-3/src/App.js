import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCards } from "./redux/cardSlice";

function App() {
  
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadCards());
	}, [dispatch]);

	return (
		<div className="container">
			<Header />
			<CardList />
		</div>
	);
}

export default App;