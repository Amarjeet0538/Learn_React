import Header from "./components/Header";

function App() {
	return (
		<div className="min-h-screen w-full relative">
			<div
				className="fixed inset-0 -z-10"
				style={{
					background:
						"radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
				}}
			/>
			<Header />
		</div>
	);
}

export default App;
