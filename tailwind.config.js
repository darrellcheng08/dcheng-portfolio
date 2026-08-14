/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: "#070412",
				},
				panel: {
					DEFAULT: "#120a24",
				},
				ink: {
					DEFAULT: "#f4f0ff",
				},
				mute: {
					DEFAULT: "#b7a8d4",
				},
				line: {
					DEFAULT: "#2a1b4a",
				},
				accent: {
					DEFAULT: "#c4b5fd",
					soft: "#a78bfa",
					dim: "#8b5cf6",
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
