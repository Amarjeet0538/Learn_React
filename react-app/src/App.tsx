import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import AlertwithButton from "./components/AlertwithButton";
import { useState } from "react";
import Counte from "./components/Counte";

function App() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
	const handleSelectItem = (item: string) => {
		console.log(item);
	};

	// const handleClick = () => {
	// 	console.log("Warning button clicked!");
	// };

	const [showAlert, setShowAlert] = useState(false);

	return (
		<div>
			<Counte />
			<br />
			<br />
			<br />
			{showAlert && (
				<AlertwithButton onClose={() => setShowAlert(false)}>
					This is a warning alert with a button!
				</AlertwithButton>
			)}

			<Button color="warning" onClickFxn={() => setShowAlert(true)}>
				Click Me
			</Button>

			<Alert>Alert MF study hard React!</Alert>

			<Message />
			<ListGroup
				items={items}
				heading="Cities"
				onselectItem={handleSelectItem}
			/>
			<ListGroup
				items={items}
				heading="States"
				onselectItem={handleSelectItem}
			/>
		</div>
	);
}

export default App;





