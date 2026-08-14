import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/content";

type SocialLinksProps = {
	className?: string;
	iconSize?: number;
};

export function SocialLinks({ className = "", iconSize = 18 }: SocialLinksProps) {
	const links = [
		{ href: profile.github, label: "GitHub", icon: Github },
		{ href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
	];

	return (
		<div className={`flex items-center gap-2 ${className}`}>
			{links.map((link) => {
				const Icon = link.icon;
				return (
					<a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-mute transition hover:border-teal hover:text-teal">
						<Icon size={iconSize} />
					</a>
				);
			})}
		</div>
	);
}
