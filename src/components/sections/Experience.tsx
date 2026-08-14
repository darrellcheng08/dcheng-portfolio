import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/content";

export function Experience() {
	return (
		<section id="experience" className="px-5 py-20 md:px-8 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<SectionHeading kicker="02 — Experience" title="Where I’ve led and built" />
				</Reveal>

				<div className="relative space-y-6 before:absolute before:bottom-3 before:left-[11px] before:top-3 before:w-px before:bg-line md:before:left-[15px]">
					{experience.map((role, index) => (
						<Reveal key={`${role.company}-${role.title}`} delay={index * 0.06}>
							<article className="grid gap-4 pl-10 md:grid-cols-[200px_1fr] md:gap-10 md:pl-12">
								<div className="relative">
									<span className="absolute -left-10 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal bg-navy md:-left-12" />
									<p className="font-mono text-xs text-teal">{role.period}</p>
									<p className="mt-1 text-sm text-mute">{role.location}</p>
								</div>
								<div className="glass-card rounded-2xl p-6">
									<h3 className="text-lg font-semibold text-ink">{role.company}</h3>
									<p className="text-sm text-mute">{role.title}</p>
									<p className="mt-3 text-mute">{role.summary}</p>
									<ul className="mt-4 space-y-2 text-sm text-mute">
										{role.highlights.map((item) => (
											<li key={item} className="flex gap-2">
												<span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
												<span>{item}</span>
											</li>
										))}
									</ul>
									<div className="mt-4 flex flex-wrap gap-1.5">
										{role.stack.map((tech) => (
											<Tag key={tech}>{tech}</Tag>
										))}
									</div>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
