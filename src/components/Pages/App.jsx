import Header from "../Header";
import Body from "./Body";
import { useState } from "react";

const App = () => {
	const [query, setQuery] = useState("");
	return (
		<div className="min-h-screen w-full relative">
			<div
				className="fixed inset-0 -z-1"
				style={{
					background:
						"radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
				}}
			/>
			<Header query={query} setQuery={setQuery} />
			{console.log("App query:", query)}
			<Body query={query} />
		</div>
	);
};

export default App;
