import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="p-2 flex gap-2 bg-indigo-700 text-white justify-between ">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/">Home</Link>
				</div>
				<div className="px-2 font-bold">
					<Link to="/fetch-pro">Fetch like a pro</Link>
				</div>
			</nav>
		</header>
	);
}
