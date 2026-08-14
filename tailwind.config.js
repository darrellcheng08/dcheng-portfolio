/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: "#0b1220",
				},
				panel: {
					DEFAULT: "#111a2b",
				},
				ink: {
					DEFAULT: "#e7eef8",
				},
				mute: {
					DEFAULT: "#93a4bb",
				},
				line: {
					DEFAULT: "#1c2a40",
				},
				teal: {
					DEFAULT: "#2dd4bf",
					dim: "#14b8a6",
				},
			},
			fontFamily: {
				sans: ["DM Sans", "system-ui", "sans-serif"],
				mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
			},
		},
	},
	plugins: [],
};
