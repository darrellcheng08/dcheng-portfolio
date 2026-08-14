import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { highlightedSkills, profile } from "@/data/content";
import { Tag } from "@/components/ui/Tag";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
	return (
		<section id="top" className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
			<div className="mx-auto max-w-6xl">
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
					<p className="text-sm font-medium text-ink md:text-base">{profile.title}</p>
					<span className="w-fit rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-sm font-medium text-teal">
						{profile.yearsExperience} years experience
					</span>
				</motion.div>

				<motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
					{profile.firstName} <span className="text-teal">{profile.lastName}</span>
				</motion.h1>

				<motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="mt-6 max-w-2xl text-lg leading-8 text-mute md:text-xl">
					{profile.intro}
				</motion.p>

				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-5 flex items-center gap-1.5 text-sm text-mute">
					<MapPin size={14} className="text-teal" />
					{profile.location}
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }} className="mt-8 flex flex-wrap gap-3">
					<a href="#work" className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-teal-dim">
						View work
						<ArrowDownRight size={16} />
					</a>
					<a href="#contact" className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-teal hover:text-teal">
						Contact
					</a>
					<SocialLinks />
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-10 flex flex-wrap gap-2">
					{highlightedSkills.map((skill) => (
						<Tag key={skill} tone="accent">
							{skill}
						</Tag>
					))}
				</motion.div>
			</div>
		</section>
	);
}
