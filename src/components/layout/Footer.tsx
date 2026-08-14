import { profile } from "@/data/content";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
	return (
		<footer className="border-t border-line">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-mute md:flex-row md:items-center md:justify-between md:px-8">
				<p>
					© {new Date().getFullYear()} {profile.name}
				</p>
				<SocialLinks />
			</div>
		</footer>
	);
}
