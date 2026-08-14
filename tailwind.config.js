/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ink: {
					950: "#080807",
					900: "#0e0d0b",
					800: "#161512",
					700: "#1f1d19",
					600: "#2c2923",
				},
				paper: {
					50: "#f7f3eb",
					100: "#ece6d9",
					200: "#cfc6b4",
					400: "#9a917f",
					500: "#7a7364",
				},
				copper: {
					300: "#e8b86d",
					400: "#d4a017",
					500: "#c9892a",
					600: "#b06a1a",
				},
			},
			fontFamily: {
				display: ["Instrument Serif", "Georgia", "serif"],
				sans: ["Outfit", "system-ui", "sans-serif"],
				mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
			},
			boxShadow: {
				glow: "0 0 80px -20px rgba(201, 137, 42, 0.35)",
			},
			backgroundImage: {
				grid: "linear-gradient(to right, rgba(247,243,235,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,243,235,0.04) 1px, transparent 1px)",
			},
			backgroundSize: {
				grid: "56px 56px",
			},
			animation: {
				marquee: "marquee 32s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
		},
	},
	plugins: [],
};
