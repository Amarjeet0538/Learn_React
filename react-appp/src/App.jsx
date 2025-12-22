import Header from "./components/Header";
import Body from "./components/Body";


function App() {
	return (
		<div className="min-h-screen w-full relative">
			<div
				className="fixed inset-0 -z-1"
				style={{
					background:
						"radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
					// background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
				}}
			/>
			<Header />
			<Body />
		</div>
	);
}

export default App;
