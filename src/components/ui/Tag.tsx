type TagProps = {
	children: string;
	tone?: "muted" | "accent";
};

export function Tag({ children, tone = "muted" }: TagProps) {
	const classes = tone === "accent" ? "border-accent/30 bg-accent/10 text-accent" : "border-line bg-panel/80 text-mute";

	return <span className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[11px] ${classes}`}>{children}</span>;
}
