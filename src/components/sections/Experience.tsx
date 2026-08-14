import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/content";

export function Experience() {
	return (
		<section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeading index="02" eyebrow="Experience" title="Seven years shipping, then leading." description="Hammerulo and ADVSR in parallel as lead; Teratomo before that on captive portal and telecom." />

			<div className="space-y-0 border-t border-paper-50/10">
				{experience.map((role) => (
					<article key={`${role.company}-${role.title}`} className="grid gap-6 border-b border-paper-50/10 py-10 lg:grid-cols-[220px_1fr] lg:gap-12">
						<div>
							<p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper-400">{role.period}</p>
							<p className="mt-2 text-sm text-paper-400">{role.location}</p>
						</div>
						<div>
							<h3 className="text-xl font-medium text-paper-50">{role.title}</h3>
							<p className="mt-1 font-display text-2xl italic text-paper-200">{role.company}</p>
							<p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper-200">{role.summary}</p>
							<ul className="mt-6 space-y-3">
								{role.highlights.map((item) => (
									<li key={item} className="flex gap-3 text-sm leading-relaxed text-paper-100">
										<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper-400" />
										{item}
									</li>
								))}
							</ul>
							<div className="mt-6 flex flex-wrap gap-2">
								{role.stack.map((tech) => (
									<Tag key={tech}>{tech}</Tag>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
