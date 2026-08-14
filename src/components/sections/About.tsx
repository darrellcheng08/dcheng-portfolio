import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { accomplishments, education, personalProjects, profile } from "@/data/content";

export function About() {
	return (
		<section id="about" className="px-5 py-20 md:px-8 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<SectionHeading kicker="04 — About" title="Builder first. Lead when the team needs it." />
				</Reveal>

				<div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
					<Reveal>
						<div className="space-y-4 text-mute">
							<p>{profile.summary}</p>
							<p>On Windows & Walls I work with the manager and QA day to day: I review pull requests, keep UPS / DHL / FedEx and SharePoint integrations moving, and maintain the diagram builder and AI PSD tools. On ADVSR I led the move from Laravel Blade to React, built the Chat AI that reads live data through MCP and MariaDB, and set up GitHub CI/CD, Docker, Cloudflare, and AWS (EC2, RDS, S3, CloudFront). I still help with bug fixes and UI improvements there.</p>
							<p>Earlier at Teratomo I led the captive portal work, managed AWS EC2 and on-premise servers, and tested for SQL injection and XSS. I still care about the quieter work — faster queries, OAuth upgrades, and safe database access in Laravel.</p>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="space-y-6">
							<div className="glass-card rounded-2xl p-6">
								<h3 className="text-sm font-semibold text-ink">Education</h3>
								{education.map((item) => (
									<div key={item.school} className="mt-3">
										<p className="text-ink">{item.degree}</p>
										<p className="text-sm text-mute">
											{item.school} · {item.location}
										</p>
										<p className="mt-1 font-mono text-xs text-teal">{item.period}</p>
									</div>
								))}
							</div>
							<div className="glass-card rounded-2xl p-6">
								<h3 className="text-sm font-semibold text-ink">Accomplishment</h3>
								{accomplishments.map((item) => (
									<p key={item.title} className="mt-3 text-mute">
										{item.title} ({item.year})
									</p>
								))}
								<div className="mt-4 flex flex-wrap gap-1.5">
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
					</Reveal>
				</div>

				<Reveal>
					<h3 className="mt-12 text-sm font-semibold text-ink">Personal projects</h3>
				</Reveal>
				<div className="mt-4 grid gap-6 md:grid-cols-3">
					{personalProjects.map((project, index) => (
						<Reveal key={project.name} delay={index * 0.06}>
							<article className="glass-card h-full rounded-2xl p-6">
								<p className="font-mono text-xs text-teal">{project.period}</p>
								<h4 className="mt-2 font-semibold text-ink">{project.name}</h4>
								<p className="mt-2 text-sm text-mute">{project.summary}</p>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
