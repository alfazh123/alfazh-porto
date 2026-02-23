import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero-index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const projects = [
		{
			name: "Project 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			name: "Project 2",
			description:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	return (
		<div className="home px-4">
			<HeroIndex />
			<div className="md:max-w-6xl mx-auto p-8 grid grid-cols-2 gap-8 rounded-lg h-[50vh] justify-center">
				<div className="bg-slate-200 p-8 rounded-lg h-fit">
					<h2 className="text-6xl font-bold mb-4">Selected Project</h2>
				</div>
				<div className="flex flex-col gap-4 h-fit">
					{projects.map((project, index) => (
						<div key={index} className="border border-gray-300 p-4 rounded-lg">
							<h3 className="text-2xl font-semibold">{project.name}</h3>
							<p className="text-gray-600">{project.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
