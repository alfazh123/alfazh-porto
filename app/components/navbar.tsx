import { gsap } from "gsap";
import { useNavigate } from "react-router";

export default function Navbar() {
	const navigate = useNavigate();

	const menu = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Projects", href: "/projects" },
	];

	function handleLocationChange(location: string) {
		const tl = gsap.timeline();

		tl.to("#body", { opacity: 0, duration: 0.5 });

		setTimeout(() => {
			navigate(location);
			tl.to("#body", { opacity: 1, duration: 0.5 });
		}, 1000);
	}

	return (
		<nav className="fixed top-0 right-0 w-fit bg-white z-50 p-4 border-l border-b">
			<ul className="flex gap-4">
				{menu.map((item) => (
					<li key={item.name}>
						<button
							type="button"
							className="relative group text-gray-900 hover:underline px-3"
							onClick={() => handleLocationChange(item.href)}>
							{item.name}
							{/* <div className="absolute -bottom-4 justify-center bg-black h-2 w-full rounded-t-xl hidden group-hover:block group-hover:ease-in-out group-hover:duration-200 group-hover:transition-all" /> */}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
