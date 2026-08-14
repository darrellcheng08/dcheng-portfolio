import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/content";

export function Projects() {
	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);

	return (
		<section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeading index="01" eyebrow="Selected work" title="Products I still own in production." description="Two flagship platforms — a multi-tenant graphics order system and a real-estate SPA with live Chat AI — plus the integrations around them." />

			<div className="space-y-6">
				{featured.map((project) => (
					<article key={project.id} className="border border-paper-50/10 bg-ink-900 p-6 sm:p-10">
						<div className="flex flex-wrap items-start justify-between gap-4">
							<div>
								<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">
									{project.company} · {project.period}
								</p>
								<h3 className="mt-3 font-display text-3xl text-paper-50 sm:text-4xl">{project.name}</h3>
								<p className="mt-1 text-sm text-paper-400">{project.role}</p>
							</div>
						</div>
						<p className="mt-6 max-w-3xl text-base leading-relaxed text-paper-200">{project.summary}</p>
						<p className="mt-4 max-w-3xl text-sm leading-relaxed text-paper-400">{project.problem}</p>
						<ul className="mt-8 space-y-3">
							{project.impact.map((item) => (
								<li key={item} className="flex gap-3 text-sm leading-relaxed text-paper-100">
									<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper-400" />
									{item}
								</li>
							))}
						</ul>
						<div className="mt-8 flex flex-wrap gap-2">
							{project.stack.map((tech) => (
								<Tag key={tech}>{tech}</Tag>
							))}
						</div>
					</article>
				))}
			</div>

			<div className="mt-6 grid gap-6 lg:grid-cols-3">
				{rest.map((project) => (
					<article key={project.id} className="flex flex-col border border-paper-50/10 bg-ink-900 p-6">
						<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-400">{project.company}</p>
						<h3 className="mt-3 font-display text-2xl text-paper-50">{project.name}</h3>
						<p className="mt-1 text-xs text-paper-400">{project.role}</p>
						<p className="mt-4 flex-1 text-sm leading-relaxed text-paper-200">{project.summary}</p>
						<ul className="mt-5 space-y-2">
							{project.impact.map((item) => (
								<li key={item} className="text-xs leading-relaxed text-paper-400">
									— {item}
								</li>
							))}
						</ul>
						<div className="mt-6 flex flex-wrap gap-2">
							{project.stack.map((tech) => (
								<Tag key={tech}>{tech}</Tag>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
