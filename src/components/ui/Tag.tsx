type TagProps = {
	children: string;
	tone?: "muted" | "accent";
};

export function Tag({ children, tone = "muted" }: TagProps) {
	const classes = tone === "accent" ? "border-copper-500/50 bg-copper-500/10 text-copper-300" : "border-paper-50/10 bg-ink-800 text-paper-200";

	return <span className={`inline-flex border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${classes}`}>{children}</span>;
}
