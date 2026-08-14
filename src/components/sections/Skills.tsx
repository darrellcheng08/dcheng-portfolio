import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/content";

export function Skills() {
	return (
		<section id="skills" className="px-5 py-20 md:px-8 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<SectionHeading
						kicker="03 — Skills"
						title="Tech Stack & Skills"
						description="The tools and technologies I use to build, integrate, and maintain production systems."
					/>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{skillGroups.map((group, index) => (
						<Reveal key={group.title} delay={index * 0.06}>
							<div className="glass-card h-full rounded-2xl p-6">
								<h3 className="text-sm font-semibold text-ink">{group.title}</h3>
								<ul className="mt-4 flex flex-wrap gap-2">
									{group.items.map((item) => (
										<li key={item}>
											<Tag>{item}</Tag>
										</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
