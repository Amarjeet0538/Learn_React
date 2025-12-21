import { Search, User } from "lucide-react";

const Left = () => {
	return <h1 className="text-2xl uppercase">Origame</h1>;
};

const Center = () => {
	return (
		<div className="flex justify-center relative">
			<Search className="absolute top-1.5 text-white/70 left-2" size={20} />
			<input
				type="text"
				placeholder="Type something..."
				className="px-2 py-1 border border-white/10 font-sans bg-white/5 rounded-lg text-center focus:outline-none focus:ring-0"
			/>
		</div>
	);
};

const Right = () => {
	return (
		<button className="flex justify-center items-center hover:underline">
			Login
		</button>
	);
};

function Header() {
	return (
		<div className="flex font-sans justify-around items-center text-white m-4">
			<Left />
			<Center />
			<Right />
		</div>
	);
}

export default Header;
