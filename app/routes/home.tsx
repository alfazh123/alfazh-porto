import { ArrowUpRight } from "lucide-react";
import type { Route } from "./+types/home";
import HeroIndex from "~/components/hero-index";
import { VscGithubAlt } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { GoMail } from "react-icons/go";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	const projects = [
		{
			name: "Image Editor",
			description:
				"Image editor web app, built with React and Tailwind CSS. implementation of `rust-editor` package",
			link: "https://github.com/alfazh123/image-editor",
			year: 2025,
		},
		{
			name: "PathXplorer",
			description:
				"Mobile app for exploring interest and talent of high school students, built with Kotlin.",
			link: "https://github.com/PathXplorer-C242-PS289",
			year: 2024,
		},
	];

	const writes = [
		{
			title: "Build WASM package with Rust",
			year: 2025,
			topics: ["WASM", "Rust", "Web Development"],
			link: "https://medium.com/@alfazh291/built-wasm-package-with-rust-99c3c76f273e",
		},
	];

	const contacts = [
		{
			type: "contacts/mail.png",
			value: "mailto:alfazh.work@gmail.com",
		},
		{
			type: "contacts/linkedin.png",
			value: "https://www.linkedin.com/in/ahmd-mufahras-li-alfazh-assardew/",
		},
		{
			type: "contacts/github.png",
			value: "https://github.com/alfazh123",
		},
	];

	return (
		<div className="home px-4">
			{/* <HeroIndex /> */}
			<div className="h-[50vh] max-w-4xl mx-auto px-12 flex flex-col justify-center py-8">
				<div className="flex flex-col z-50 bg-slate-50 w-fit">
					<div className="text-8xl font-bold">Ahmd Alfazh</div>
					<div>
						I'm a FrontEnd Developer Experience in React, NextJs, and Tailwind
						CSS.
					</div>
				</div>
			</div>

			<div className="md:max-w-4xl mx-auto p-8 grid md:grid-cols-2 grid-cols-1 rounded-lg justify-center">
				<div className="rounded-lg w-full justify-center mb-8 h-80">
					<h2 className="text-6xl font-bold mb-4">Selected Project</h2>
				</div>
				{projects.map((project, index) => (
					<a
						key={index}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="border-b-2 border-gray-300 p-4 flex flex-col justify-between h-80 hover:bg-slate-100 hover:scale-110 transition-transform duration-300 rounded-t-lg">
						<div>
							<h3 className="text-2xl font-semibold">{project.name}</h3>
							<p className="text-gray-600">{project.description}</p>
						</div>
						<div className="w-full flex justify-end">
							<p className="text-6xl">{project.year}</p>
							<ArrowUpRight className="w-12 h-12" />
						</div>
					</a>
				))}
			</div>

			<div className="md:max-w-4xl mx-auto p-8 grid md:grid-cols-2 grid-cols-1 rounded-lg justify-center mt-16">
				<div className="rounded-lg w-full justify-center mb-8 h-60">
					<h2 className="text-6xl font-bold mb-4">Selected Writes</h2>
				</div>
				{writes.map((write, index) => (
					<a
						key={index}
						href={write.link}
						target="_blank"
						rel="noopener noreferrer"
						className="group border-b border-gray-300 p-4 rounded-lg flex justify-center items-center text-center rotate-6 bg-slate-100 hover:scale-110 transition-transform duration-300">
						<div className="gochi-hand-regular">
							<h3 className="text-4xl group-hover:underline">{write.title}</h3>
							<div className="flex gap-2 mx-auto justify-center">
								{write.topics.map((topic, id) => (
									<div
										key={id}
										className="text-gray-600 bg-slate-100 px-2 py-1 rounded text-sm">
										{topic}
									</div>
								))}
							</div>
						</div>
						<div>
							{/* <ArrowUpRight className="w-8 h-8" /> */}
							{/* <p className="text-6xl">{write.year}</p> */}
						</div>
					</a>
				))}
			</div>

			{/* Contacs */}
			<div className="md:max-w-4xl mx-auto p-8 flex flex-col rounded-lg h-[50vh] justify-center">
				<div className="rounded-lg w-full justify-center text-center mb-4">
					<h2 className="text-6xl font-bold">Contacts</h2>
					<p className="text-lg">
						If you want to get in touch 👋, feel free to reach out to me on link
						below.
					</p>
				</div>
				<div className="flex gap-8 justify-center">
					{contacts.map((contact, index) => (
						<div key={index} className="flex justify-center items-center">
							<a href={contact.value} target="_blank" rel="noopener noreferrer">
								<img
									src={contact.type}
									alt={`Contact ${index + 1}`}
									className="w-12 h-12"
								/>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
