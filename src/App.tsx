import { Header, Footer } from "@/components/layout";
import { Hero, Projects, Experience, Skills, About, Contact } from "@/components/sections";

export default function App() {
	return (
		<div className="relative min-h-screen overflow-x-hidden">
			<div className="pointer-events-none fixed -left-24 top-[-6rem] h-80 w-80 rounded-full bg-teal/20 blur-[110px]" />
			<div className="pointer-events-none fixed -right-16 top-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[110px]" />
			<div className="pointer-events-none fixed bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal/10 blur-[100px]" />

			<Header />
			<main className="relative z-10">
				<Hero />
				<div className="section-rule mx-auto w-[min(90%,56rem)]" />
				<Projects />
				<div className="section-rule mx-auto w-[min(90%,56rem)]" />
				<Experience />
				<div className="section-rule mx-auto w-[min(90%,56rem)]" />
				<Skills />
				<div className="section-rule mx-auto w-[min(90%,56rem)]" />
				<About />
				<div className="section-rule mx-auto w-[min(90%,56rem)]" />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
