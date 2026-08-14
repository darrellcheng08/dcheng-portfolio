import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/content";

export function Contact() {
	return (
		<section id="contact" className="px-5 py-20 md:px-8 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<SectionHeading kicker="05 — Contact" title="Let’s work together" description="Email is best." />
				</Reveal>

				<div className="grid gap-6 sm:grid-cols-2">
					<Reveal>
						<a href={`mailto:${profile.email}`} className="glass-card group flex items-start justify-between rounded-2xl p-6 transition hover:border-accent/40">
							<div>
								<p className="font-mono text-xs text-accent">Email</p>
								<p className="mt-2 text-lg text-ink">{profile.email}</p>
							</div>
							<Mail className="text-mute transition group-hover:text-accent" size={20} />
						</a>
					</Reveal>
					<Reveal delay={0.08}>
						<a href={profile.phoneHref} className="glass-card group flex items-start justify-between rounded-2xl p-6 transition hover:border-accent/40">
							<div>
								<p className="font-mono text-xs text-accent">Phone</p>
								<p className="mt-2 text-lg text-ink">{profile.phone}</p>
							</div>
							<Phone className="text-mute transition group-hover:text-accent" size={20} />
						</a>
					</Reveal>
					<Reveal delay={0.12}>
						<a href={profile.github} target="_blank" rel="noreferrer" className="glass-card group flex items-start justify-between rounded-2xl p-6 transition hover:border-accent/40">
							<div>
								<p className="font-mono text-xs text-accent">GitHub</p>
								<p className="mt-2 text-lg text-ink">darrellcheng08</p>
							</div>
							<Github className="text-mute transition group-hover:text-accent" size={20} />
						</a>
					</Reveal>
					<Reveal delay={0.16}>
						<a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass-card group flex items-start justify-between rounded-2xl p-6 transition hover:border-accent/40">
							<div>
								<p className="font-mono text-xs text-accent">LinkedIn</p>
								<p className="mt-2 text-lg text-ink">Darrell Cheng</p>
							</div>
							<Linkedin className="text-mute transition group-hover:text-accent" size={20} />
						</a>
					</Reveal>
				</div>

				<Reveal>
					<div className="mt-8">
						<a href={`mailto:${profile.email}?subject=Hello%20Darrell`} className="inline-flex rounded-full bg-accent-soft px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgb(139_92_246_/_0.45)] transition hover:bg-accent-dim">
							Send an email
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
