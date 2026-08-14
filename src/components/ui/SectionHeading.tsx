type SectionHeadingProps = {
	index: string;
	eyebrow: string;
	title: string;
	description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
	return (
		<div className="mb-12 max-w-3xl sm:mb-16">
			<p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-copper-400">
				{index} — {eyebrow}
			</p>
			<h2 className="font-display text-4xl leading-tight text-paper-50 sm:text-5xl">{title}</h2>
			{description ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper-200 sm:text-lg">{description}</p> : null}
		</div>
	);
}
