import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { highlightedSkills, skillGroups } from "@/data/content";

export function Skills() {
	return (
		<section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeading index="03" eyebrow="Stack" title="What I reach for in production." description="Highlighted skills first — the rest is what shows up on the resume when the job needs it." />

			<div className="mb-12 flex flex-wrap gap-2">
				{highlightedSkills.map((skill) => (
					<Tag key={skill} tone="accent">
						{skill}
					</Tag>
				))}
			</div>

			<div className="grid gap-8 sm:grid-cols-2">
				{skillGroups.map((group) => (
					<div key={group.title} className="border border-paper-50/10 bg-ink-900 p-6">
						<h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">{group.title}</h3>
						<ul className="mt-5 flex flex-wrap gap-2">
							{group.items.map((item) => (
								<li key={item}>
									<Tag>{item}</Tag>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
