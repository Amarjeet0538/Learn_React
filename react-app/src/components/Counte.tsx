import Button from "./Button";
import { useState } from "react";

function addValue(count: number, setCount: (value: number) => void) {
	if (count < 20) setCount(count + 1);
	else alert("Maximum limit reached");
}

function subtractValue(count: number, setCount: (value: number) => void) {
	if (count > 0) setCount(count - 1);
	else alert("Minimum limit reached");
}

const Counte = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="p-10 flex flex-col items-center justify-center">
			<span className="">Counter: {count} </span>
			<Button
				color="secondary"
				classNAME="p-4"
				onClickFxn={() => {
					addValue(count, setCount);
				}}
			>
				Increment
			</Button>
			<Button
				classNAME="m-2 p-4"
				onClickFxn={() => {
					subtractValue(count, setCount);
				}}
			>
				Decrement
			</Button>
		</div>
	);
};

export default Counte;
