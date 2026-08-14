import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { accomplishments, education, personalProjects, profile } from "@/data/content";

export function About() {
	return (
		<section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeading index="04" eyebrow="About" title="Builder first. Lead when the team needs it." />

			<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="space-y-5 text-base leading-relaxed text-paper-200">
					<p>{profile.summary}</p>
					<p>On Windows & Walls I am the engineer in the room with the manager and QA: I review PRs, unblock shipping and SharePoint work, and keep the diagram builder and AI PSD pipeline moving. On ADVSR I did the Blade-to-React cutover myself, then the Chat AI path through MCP into MariaDB.</p>
					<p>Earlier at Teratomo I led captive portal delivery, ran EC2 and on-prem boxes, and tested for injection and XSS. I still care about the unglamorous parts — query indexes, OAuth upgrades, and not leaving a raw DB query in a Laravel app.</p>
				</div>

				<div className="space-y-8">
					<div>
						<h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">Education</h3>
						{education.map((item) => (
							<div key={item.school} className="mt-4 border border-paper-50/10 bg-ink-900 p-5">
								<p className="text-paper-50">{item.degree}</p>
								<p className="mt-1 text-sm text-paper-400">
									{item.school} · {item.location}
								</p>
								<p className="mt-2 font-mono text-[11px] text-paper-500">{item.period}</p>
							</div>
						))}
					</div>

					<div>
						<h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">Accomplishment</h3>
						{accomplishments.map((item) => (
							<p key={item.title} className="mt-4 text-sm text-paper-200">
								{item.title} <span className="text-paper-500">({item.year})</span>
							</p>
						))}
					</div>

					<div>
						<h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">Languages & interests</h3>
						<div className="mt-4 flex flex-wrap gap-2">
							{profile.languages.map((lang) => (
								<Tag key={lang} tone="accent">
									{lang}
								</Tag>
							))}
							{profile.interests.map((interest) => (
								<Tag key={interest}>{interest}</Tag>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="mt-16">
				<h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">Personal projects</h3>
				<div className="mt-6 grid gap-6 md:grid-cols-3">
					{personalProjects.map((project) => (
						<article key={project.name} className="border border-paper-50/10 bg-ink-900 p-5">
							<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-500">{project.period}</p>
							<h4 className="mt-2 font-display text-xl text-paper-50">{project.name}</h4>
							<p className="mt-3 text-sm leading-relaxed text-paper-400">{project.summary}</p>
							<div className="mt-4 flex flex-wrap gap-2">
								{project.stack.map((tech) => (
									<Tag key={tech}>{tech}</Tag>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
