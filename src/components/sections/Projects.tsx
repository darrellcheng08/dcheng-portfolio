import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/content";

export function Projects() {
	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);

	return (
		<section id="work" className="px-5 py-20 md:px-8 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<SectionHeading
						kicker="01 — Work"
						title="Featured Projects"
						description="Standout work: platforms I lead in production for craft, reliability, and impact."
					/>
				</Reveal>

				<div className="grid gap-6 lg:grid-cols-2">
					{featured.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							whileHover={{ y: -6 }}
							className="glass-card group rounded-2xl p-6 shadow-[0_20px_50px_-28px_rgb(167_139_250_/_0.35)] transition md:p-8"
						>
							<p className="font-mono text-xs text-accent">
								{project.company} · {project.period}
							</p>
							<h3 className="mt-3 text-2xl font-semibold text-ink group-hover:text-accent">{project.name}</h3>
							<p className="mt-1 text-sm text-mute">{project.role}</p>
							<p className="mt-4 text-mute">{project.summary}</p>
							<ul className="mt-5 space-y-2 text-sm text-mute">
								{project.impact.slice(0, 4).map((item) => (
									<li key={item} className="flex gap-2">
										<span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<div className="mt-6 flex flex-wrap gap-1.5">
								{project.stack.slice(0, 8).map((tech) => (
									<Tag key={tech}>{tech}</Tag>
								))}
							</div>
						</motion.article>
					))}
				</div>

				<Reveal>
					<h3 className="mb-6 mt-14 font-mono text-xs tracking-[0.2em] text-accent">More projects</h3>
				</Reveal>
				<div className="grid gap-6 md:grid-cols-3">
					{rest.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							whileHover={{ y: -6 }}
							className="glass-card rounded-2xl p-6 transition"
						>
							<p className="font-mono text-xs text-accent">{project.company}</p>
							<h3 className="mt-2 text-lg font-semibold text-ink">{project.name}</h3>
							<p className="mt-1 text-xs text-mute">{project.role}</p>
							<p className="mt-3 text-sm text-mute">{project.summary}</p>
							<div className="mt-4 flex flex-wrap gap-1.5">
								{project.stack.slice(0, 5).map((tech) => (
									<Tag key={tech}>{tech}</Tag>
								))}
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
