import { Header, Footer } from "@/components/layout";
import { Hero, Projects, Experience, Skills, About, Contact } from "@/components/sections";

export default function App() {
	return (
		<div className="relative min-h-screen">
			<div className="pointer-events-none fixed inset-0 z-40 opacity-[0.035] grain" />
			<Header />
			<main>
				<Hero />
				<Projects />
				<Experience />
				<Skills />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
