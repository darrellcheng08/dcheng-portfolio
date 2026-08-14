type SectionHeadingProps = {
	kicker: string;
	title: string;
	description?: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
	return (
		<div className="mb-10 max-w-2xl">
			<p className="font-mono text-xs tracking-[0.2em] text-accent">{kicker}</p>
			<h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
			{description ? <p className="mt-3 text-mute">{description}</p> : null}
		</div>
	);
}
