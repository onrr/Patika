import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setPoint } from "../redux/cardSlice";

function Header() {
	const count = useSelector((state) => state.card.count);
	const point = useSelector((state) => state.card.point);
	const first = useSelector((state) => state.card.firstChoice);
	const second = useSelector((state) => state.card.secondChoice);

	const dispatch = useDispatch();

	useEffect(() => {
		if (first !== "" && second !== "") {
			dispatch(setCount());
			if (first === second) {
				dispatch(setPoint("true"));
			} else {
				dispatch(setPoint("false"));
			}
		}
	}, [first, second, dispatch]);

	return (
		<div className="header">
			<p className="name">Memory Card Game</p>
			<div className="rules">
				<span>If your score drops below 0, the game is over</span>
				<div className="points">
					<span>right choice +10 points || wrong choice -5 points</span>
				</div>
			</div>
					<div className="info">
						<span>Score: {point}</span>
						<span>Count: {count}</span>
					</div>
		</div>
	);
}

export default Header;