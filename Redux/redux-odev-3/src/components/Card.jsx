import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStatus, setFirstChoice, setSecondChoice } from "../redux/cardSlice";

function Card({ card }) {
	const first = useSelector((state) => state.card.firstChoice);
	const second = useSelector((state) => state.card.secondChoice);
	const point = useSelector((state) => state.card.point);

    const dispatch = useDispatch();

	useEffect(() => {
		if (document.querySelectorAll(".correct").length === 24 || point < 0) {
			setTimeout(() => {
				dispatch(gameStatus("end"));
			}, 1000);
		}
		if (first !== "" && second !== "") {
			if (first === second) {
				dispatch(setFirstChoice(""));
				dispatch(setSecondChoice(""));
				document.querySelectorAll(".clickEvent").forEach((item) => {
					item.classList.remove("clickEvent");
					item.classList.add("correct");
				});
			}
			if (first !== second && second !== "") {
				dispatch(setFirstChoice(""));
				dispatch(setSecondChoice(""));
				setTimeout(() => {
					document.querySelectorAll(".clickEvent").forEach((item) => {
						item.classList.remove("clickEvent");
					});
				}, 1000);
			}
		}
	}, [first, second, dispatch, point]);

	const clickHandle = (e) => {
		if (first === "") {
			dispatch(setFirstChoice(e.target.attributes.name.nodeValue));
			e.target.parentElement.classList.add("clickEvent");
		} else {
			dispatch(setSecondChoice(e.target.attributes.name.nodeValue));
			e.target.parentElement.classList.add("clickEvent");
		}
	};

	return (
		<div className="cards" onClick={(e) => clickHandle(e)}>
			<div className="card back" name={card.name}>
				?
			</div>
			<div className="card front">
				<img src={card.img} alt={card.name} />
			</div>
		</div>
	);
}

export default Card;