import { Header, Footer } from "@/components/layout";
import { Hero, Projects, Experience, Skills, About, Contact } from "@/components/sections";

export default function App() {
	return (
		<div className="space-bg relative min-h-screen overflow-x-hidden">
			<div className="stars pointer-events-none fixed inset-0 z-0" aria-hidden />
			<div className="stars-dense pointer-events-none fixed inset-0 z-0" aria-hidden />
			<div className="pointer-events-none fixed left-1/2 top-[-12rem] z-0 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#50168a]/40 blur-[100px]" aria-hidden />
			<div className="pointer-events-none fixed -left-20 top-1/3 z-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" aria-hidden />
			<div className="pointer-events-none fixed -right-16 bottom-1/4 z-0 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" aria-hidden />

			<div className="relative z-10">
				<Header />
				<main>
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
		</div>
	);
}
