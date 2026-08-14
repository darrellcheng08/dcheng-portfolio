import type { Accomplishment, EducationItem, ExperienceRole, NavItem, PersonalProject, Project, SkillGroup } from "@/types";

export const profile = {
	name: "Darrell Cheng",
	firstName: "Darrell",
	lastName: "Cheng",
	title: "Senior Full-Stack Developer",
	location: "Quezon City, Philippines",
	email: "cheng.darrell12@gmail.com",
	phone: "0926 466 8713",
	phoneHref: "tel:+639264668713",
	github: "https://github.com/darrellcheng08",
	linkedin: "https://www.linkedin.com/in/darrell-c-501a26124/",
	yearsExperience: "8+",
	intro:
		"Full-stack developer with broad experience across PHP, Laravel, React, Vue, TypeScript, Python, and AWS. I lead teams on production systems — multi-tenant platforms, shipping and AI integrations, and DevOps — from first setup through deployment and maintenance.",
	tagline: "I lead full-stack delivery — from multi-tenant order platforms and shipping APIs to AI that answers questions against live databases.",
	summary:
		"Senior full-stack developer and team lead with 8+ years building Laravel, Vue, React, and TypeScript systems — plus DevOps: GitHub CI/CD, Docker, Cloudflare, and AWS. I take products from setup through automation: code review, integrations (OpenAI, MCP, Stripe, Shopify, UPS / DHL / FedEx), and infrastructure. Currently leading Windows & Walls at Hammerulo Data Corporation, and supporting ADVSR.ai with bug fixes and UI improvements.",
	languages: ["English", "Tagalog"],
	interests: ["AI", "Cloud computing", "Stock market", "DevOps"],
} as const;

export const navItems: NavItem[] = [
	{ label: "Work", href: "#work" },
	{ label: "Experience", href: "#experience" },
	{ label: "Skills", href: "#skills" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

export const highlightedSkills = ["PHP", "Laravel", "TypeScript", "React.js", "Vue.js", "Node.js", "Python", "Docker", "AWS", "Cloudflare"] as const;

export const skillGroups: SkillGroup[] = [
	{
		title: "Languages & frameworks",
		items: ["PHP", "Laravel", "TypeScript", "JavaScript", "React.js", "Vue.js", "Vuetify", "Angular", "Node.js", "Python", "jQuery", "Tailwind CSS", "Bootstrap"],
	},
	{
		title: "Cloud & infrastructure",
		items: ["AWS S3", "AWS EC2", "AWS RDS", "AWS CloudFront", "Load balancer", "Cloudflare", "Docker", "Linux", "Nginx", "Apache", "MariaDB / MySQL"],
	},
	{
		title: "Integrations",
		items: ["OpenAI", "MCP", "ChromaDB", "Stripe", "Shopify", "eBay", "UPS", "DHL", "FedEx", "R+L Carriers", "SharePoint", "Auth0 / SAML", "Azure AD", "Pusher", "Swagger"],
	},
	{
		title: "Practice",
		items: ["GitHub Actions / CI/CD", "GitHub", "Bitbucket", "Jira", "Code review", "Team lead", "Query optimization", "OAuth", "Jasper Reports", "Laravel Excel"],
	},
];

export const marqueeSkills = ["PHP", "Laravel", "TypeScript", "React.js", "Vue.js", "Node.js", "Python", "Docker", "AWS", "Cloudflare", "GitHub Actions", "OpenAI", "MCP", "Stripe", "Shopify", "UPS", "DHL", "FedEx", "SharePoint"];

export const experience: ExperienceRole[] = [
	{
		company: "Hammerulo Data Corporation",
		title: "Senior Full-Stack Developer & Team Lead",
		period: "Jun 2021 — Present",
		location: "Philippines",
		summary: "Team lead on Windows & Walls (setup through maintenance), plus HireHelpr and a Shopify/eBay commerce stack. I own task automation, code review, and PR approval for a developer I mentor, working with a manager and QA.",
		highlights: [
			"Stood up Windows & Walls from scratch: Vue.js, Vuetify, Python, PHP/Laravel, Pusher for realtime — multi-tenant graphics ordering for brands like Monster and Coca-Cola.",
			"Designed the diagram builder: multiple windows, doors, car glass and body, with art styles and dimensions so sales can place install-ready orders.",
			"Automated PSD generation with OpenAI so Photoshop files arrive with images and layers already in place — designers drag and compose instead of building files by hand.",
			"Integrated UPS, DHL, FedEx, and R+L Carriers, plus SharePoint order sync and Swagger API docs.",
			"HireHelpr: bug fixes and Angular UI work for a pool-cleaner hiring flow (approval + photo verification); replaced setTimeout waits with async/await.",
			"Commerce site: Shopify and eBay listing/stock sync, template customization, OAuth and API version upgrades, and SQL-injection hardening on legacy Laravel queries.",
		],
		stack: ["Laravel", "Vue.js", "Vuetify", "Python", "Pusher", "Angular", "Shopify", "eBay", "OpenAI", "AWS"],
	},
	{
		company: "ADVSR.ai",
		title: "Senior Full-Stack Developer & Team Lead",
		period: "Nov 2024 — Present",
		location: "Part-time · on-call",
		summary: "Part-time lead on a real-estate agent platform: sign-up, properties, ambassador collaboration, Stripe subscriptions, and a Chat AI that returns live data. I shipped the React rebuild and DevOps stack (GitHub CI/CD, Docker, Cloudflare, AWS) and still support the site on-call for bugs and UI improvements.",
		highlights: [
			"Started on bug fixes and performance, then converted Laravel Blade pages to React, TypeScript, Tailwind, and Vite — set up by hand before AI coding tools were the default.",
			"Implemented Figma-to-React UI redesigns across member and public pages.",
			"Built Chat AI with OpenAI, MCP (MariaDB connector), ChromaDB/vector cache, and RDS so questions about agents, properties, ambassadors, countries, and sales return real database results.",
			"Stood up GitHub CI/CD, Docker containers for consistent deploy and maintenance, Cloudflare for edge security, and AWS (EC2, RDS, S3, CloudFront) for compute, database, media, and CDN.",
			"Lead: code review, PR approval, and delivery with one developer.",
			"Still on the team on-call: bug fixes and UI improvements as they come in.",
		],
		stack: ["Laravel", "React.js", "TypeScript", "Tailwind", "Vite", "OpenAI", "MCP", "ChromaDB", "Docker", "GitHub Actions", "Cloudflare", "AWS", "Stripe"],
	},
	{
		company: "Teratomo Corporation",
		title: "Software Developer",
		period: "Jul 2018 — Jun 2021",
		location: "Quezon City",
		summary: "Team lead on captive portal and telecom systems: AWS EC2 and on-prem servers, SMS and payment APIs, access-point integrations, and security testing.",
		highlights: [
			"Led captive portal work with Vue.js, Vuetify, Docker, Laravel, MySQL, Nginx — AWS EC2 or on-premise.",
			"Built telecom and airline-demo apps (document upload, extra workflows) and REST APIs for mobile clients.",
			"Integrated SMS gateway, payment gateway, social login, and Cisco Meraki; configured Cambium, EnGenius, Ruijie, IgniteNet, and TP-Link access points.",
			"SQL indexing and stored procedures; security testing for SQL injection and XSS (Kali Linux).",
		],
		stack: ["Laravel", "Vue.js", "Vuetify", "Node.js", "Docker", "AWS EC2", "Nginx", "FreeRADIUS"],
	},
	{
		company: "Teratomo Corporation",
		title: "Software Developer Intern",
		period: "Nov 2017 — Jul 2018",
		location: "Quezon City",
		summary: "Built HRIS, automated maintenance/operations for a construction company, and an early captive portal on Laravel, Vue.js, Node.js, and MySQL.",
		highlights: [
			"HRIS with Node.js, Vue.js, MySQL, Apache, and Laravel.",
			"Maintenance and operations system for a construction company.",
			"Captive portal using Vue.js, Apache, MySQL, and Laravel.",
		],
		stack: ["Laravel", "Vue.js", "Node.js", "MySQL", "Apache"],
	},
];

export const projects: Project[] = [
	{
		id: "windows-and-walls",
		name: "Windows & Walls",
		role: "Team lead · setup to maintenance",
		period: "2021 — Present",
		company: "Hammerulo Data Corporation",
		featured: true,
		summary: "A multi-brand ordering platform for store-window, door, and vehicle graphics. Sales use a diagram builder I built to map each job, then the order moves through design, production, shipping, and on-site installation.",
		problem: "Brand programs (Coca-Cola, Monster, and similar) needed a single place to order store-window and vehicle graphics, with tenant isolation, an approval pipeline, carrier rates, and Photoshop-ready art for designers.",
		impact: [
			"Diagram builder: multiple windows, doors, car glass or body — attach art styles and dimensions so sales can order without a designer in the room.",
			"Order pipeline: approval → design → approved → production → outsourced (optional) → production → finishing → packaging → shipping → shipped → billed.",
			"OpenAI-generated PSDs with images and layers pre-built so designers only drag and compose.",
			"Realtime with Pusher; shipping via UPS, DHL, FedEx, R+L Carriers; SharePoint sync; Swagger docs.",
			"Team lead: task automation, code review, and PR approval alongside manager and QA.",
		],
		stack: ["Laravel", "Vue.js", "Vuetify", "Python", "Pusher", "OpenAI", "UPS / DHL / FedEx", "R+L Carriers", "SharePoint", "Swagger", "AWS"],
	},
	{
		id: "advsr",
		name: "ADVSR.ai",
		role: "Team lead · platform rebuild, Chat AI & DevOps",
		period: "2024 — Present",
		company: "ADVSR.ai",
		featured: true,
		summary: "A real-estate platform for agents to sign up, list properties, collaborate with ambassadors, and manage Stripe subscriptions. I rebuilt the app in React, added a Chat AI that answers with live database data, and set up CI/CD, Docker, Cloudflare, and AWS.",
		problem: "The product ran on slow Laravel Blade pages. Agents needed a faster SPA, live-data Chat AI, and a production stack with CI/CD, containers, CDN, and edge security — not a laptop deploy.",
		impact: [
			"Migrated Blade → React + TypeScript + Tailwind + Vite (manual setup, then Figma-faithful UI).",
			"Chat AI: question → OpenAI → SQL via MCP → MariaDB; ChromaDB/vector for cache and fast retrieval.",
			"Live answers for agents, properties, ambassadors, top countries, and sales.",
			"DevOps: GitHub Actions CI/CD, Docker containers for maintainable deploys, Cloudflare for security, AWS EC2 (app), RDS (MariaDB), S3 (media), CloudFront (CDN).",
			"Lead for one developer: review, PRs, and delivery after an initial bug-fix / performance pass.",
			"Ongoing: on-call for bugs and UI improvements.",
		],
		stack: ["Laravel", "React.js", "TypeScript", "Tailwind", "Vite", "OpenAI", "MCP", "ChromaDB", "Docker", "GitHub Actions", "Cloudflare", "EC2", "RDS", "S3", "CloudFront", "Stripe"],
	},
	{
		id: "hirehelpr",
		name: "HireHelpr",
		role: "Bug fixes & Angular UI",
		period: "Hammerulo",
		company: "Hammerulo Data Corporation",
		featured: false,
		summary: "Hiring platform for pool cleaners: approval workflow and photo proof that a job is done.",
		problem: "Legacy Angular UI and setTimeout-based API waits made the flow brittle and slow to extend.",
		impact: [
			"Replaced setTimeout polling with async/await around API responses.",
			"Shipped UI redesigns and bug fixes on Laravel + Node.js + Angular.",
		],
		stack: ["Laravel", "Node.js", "Angular", "Custom CSS"],
	},
	{
		id: "commerce-sync",
		name: "Shopify & eBay commerce",
		role: "Integrations & hardening",
		period: "Hammerulo",
		company: "Hammerulo Data Corporation",
		featured: false,
		summary: "Internal catalog that lists, relists, and removes products on Shopify and eBay while keeping stock in sync.",
		problem: "Old API auth, outdated API versions, and raw DB queries left the app behind on platforms and open to SQL injection.",
		impact: [
			"Shopify and eBay listing/stock sync plus Shopify theme customization.",
			"Moved to OAuth and current API versions.",
			"Replaced injectable legacy Laravel queries with safer query patterns.",
		],
		stack: ["Laravel", "PHP", "Bootstrap", "Shopify", "eBay", "OAuth", "AWS"],
	},
	{
		id: "captive-portal",
		name: "Captive portal & telecom",
		role: "Team lead",
		period: "2018 — 2021",
		company: "Teratomo Corporation",
		featured: false,
		summary: "Captive portal and telecom sites with payment, SMS, social login, and multi-vendor Wi-Fi hardware — on AWS EC2 or on-prem.",
		problem: "ISPs and venues needed guest Wi-Fi login, billing, and hardware that spanned Cisco Meraki through TP-Link, plus APIs for mobile apps.",
		impact: [
			"Team lead on the captive portal stack (Vue, Vuetify, Docker, Laravel, Nginx).",
			"REST APIs for mobile; SMS, payment, and social auth; FreeRADIUS.",
			"Access-point integration and Kali-based SQL injection / XSS testing.",
		],
		stack: ["Laravel", "Vue.js", "Docker", "AWS EC2", "Nginx", "FreeRADIUS", "Cisco Meraki"],
	},
];

export const personalProjects: PersonalProject[] = [
	{
		name: "Vendo printing machine",
		period: "Dec 2017 — May 2018",
		summary: "Insert a USB drive, pick a Word or PDF file, pay the exact amount, and the machine prints the document. Built on Python 3 and Raspberry Pi.",
		stack: ["Python 3", "Raspberry Pi"],
	},
	{
		name: "Online learning management system",
		period: "Jan 2017 — Feb 2018",
		summary: "Students review notes, lectures, and handouts from phone, tablet, or desktop on their own time.",
		stack: ["Web"],
	},
	{
		name: "Online school portal",
		period: "Jan 2016 — Dec 2017",
		summary: "Portal for teachers, parents, and elementary/high-school students to generate and view grades online.",
		stack: ["Web"],
	},
];

export const education: EducationItem[] = [
	{
		school: "STI College Fairview",
		degree: "Bachelor of Science in Information Technology (BSIT)",
		period: "Jun 2014 — May 2018",
		location: "Quezon City",
	},
];

export const accomplishments: Accomplishment[] = [
	{ title: "STI Online / TPS ICT Exhibit Champion", year: "2018" },
];
