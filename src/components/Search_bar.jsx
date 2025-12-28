import { Search } from "lucide-react";

const Search_bar = ({ value, onChange }) => {
	return (
		<div className="w-80 relative scale-110">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={18}/>
			<input
				type="text"
				value={value}
				placeholder="Type something..."
				className="w-full pl-10 pr-3 py-3  border border-white/10  bg-white/5 rounded-lg text-left focus:outline-none focus:ring-0"
				onChange={(e) => {onChange(e.target.value)}}
			/>
		</div>
	);
};

export default Search_bar;

