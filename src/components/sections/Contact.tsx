import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/content";

export function Contact() {
	return (
		<section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeading index="05" eyebrow="Contact" title="If the work sounds like yours, write." description="Best by email. Resume is a PDF on this site." />

			<div className="grid gap-6 sm:grid-cols-2">
				<a href={`mailto:${profile.email}`} className="group flex items-start justify-between border border-paper-50/10 bg-ink-900 p-6 transition-colors hover:border-copper-500/60">
					<div>
						<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">Email</p>
						<p className="mt-3 text-lg text-paper-50">{profile.email}</p>
					</div>
					<Mail className="text-paper-400 transition-colors group-hover:text-copper-300" size={20} />
				</a>

				<a href={profile.phoneHref} className="group flex items-start justify-between border border-paper-50/10 bg-ink-900 p-6 transition-colors hover:border-copper-500/60">
					<div>
						<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper-400">Phone</p>
						<p className="mt-3 text-lg text-paper-50">{profile.phone}</p>
					</div>
					<Phone className="text-paper-400 transition-colors group-hover:text-copper-300" size={20} />
				</a>
			</div>

			<div className="mt-8 flex flex-wrap gap-4">
				<a href={profile.resumeUrl} download className="inline-flex items-center gap-2 border border-paper-50/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-50 transition-colors hover:border-copper-400 hover:text-copper-300">
					<Download size={14} />
					Download resume
				</a>
				<a href={`mailto:${profile.email}?subject=Hello%20Darrell`} className="inline-flex items-center gap-2 bg-paper-50 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-950 transition-colors hover:bg-copper-300">
					Send an email
					<ArrowUpRight size={14} />
				</a>
			</div>
		</section>
	);
}
