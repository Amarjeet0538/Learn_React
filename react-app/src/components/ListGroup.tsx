import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onselectItem: (item: string) => void;
}

function ListGroup({ items, heading, onselectItem }: Props) {
	// let items = ["A", "B", "C", "D", "E"];
	// items = [];

	// if (items.length == 0)
	// 	return (
	// 		<>
	// 			<h1>Hello</h1> <p>No items found</p>
	// 		</>
	// 	);

	const msg_func = () => {
		return items.length === 0 ? (
			<p>No items found</p>
		) : (
			<h1>Here are the items </h1>
		);
	};

	const msg =
		items.length === 0 ? <p>No items found</p> : <h1>Here are the items </h1>;

	// const handleClick = (event: React.MouseEvent<HTMLLIElement>) =>
	// 	{
	//         console.log(event);
	//     }

	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<>
			<h1>{heading}</h1>
			{msg}
			{msg_func()}
			<ul className="list-group">
				{/* <li className="list-group-item active">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item ">Vestibulum at eros</li>
            */}
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onselectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
