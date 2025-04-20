import { Link, createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center">
			<header className="min-h-screen flex flex-col items-center justify-center bg-[#141414] text-white text-[calc(10px+2vmin)]">
				<img
					src={logo}
					className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
					alt="logo"
				/>
				<h1>React 19</h1>

					<Link to="/"> <span	className="text-[#61dafb] hover:underline">Home</span></Link>
					<Link to="/fetch-pro"> <span	className="text-[#61dafb] hover:underline">Fetch like a pro</span></Link>

			
			</header>
		</div>
	);
}
