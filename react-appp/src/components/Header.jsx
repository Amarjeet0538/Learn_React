import Search_bar from "./Search_bar";

const Left = () => {
	return <a className="text-4xl uppercase font-mont">Origame</a>;
};

const Right = () => {
	return (
		<button className="cursor-pointer text-xl py-2 px-4 rounded-lg border border-white">
			Login
		</button>
	);
};

function Header({query, setQuery}) {
	return (
		<div className="flex font-sans justify-around items-center text-white m-4">
			<Left />
			<Search_bar value={query} onChange={setQuery} />
			<Right />
		</div>
	);
}

export default Header;
