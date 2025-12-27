import Search_bar from "./Search_bar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";

const Left = () => {
	return <a className="text-4xl uppercase font-mont">Origame</a>;
};

const Right = () => {
	const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };


	return (
		<>
			{user ? (
				<button
					onClick={handleLogout}
					className="cursor-pointer text-xl py-2 px-4 rounded-lg border border-white"
				>
					Logout
				</button>
			) : (
				<Link
					to="/login"
					className="cursor-pointer text-xl py-2 px-4 rounded-lg border border-white"
				>
					Login
				</Link>
			)}
		</>
	);
};

function Header({ query, setQuery }) {
	return (
		<div className="flex font-sans justify-around items-center text-white m-4">
			<Left />
			<Search_bar value={query} onChange={setQuery} />
			<Right />
		</div>
	);
}

export default Header;
