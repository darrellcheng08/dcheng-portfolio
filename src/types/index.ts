export type NavItem = {
	label: string;
	href: string;
};

export type SkillGroup = {
	title: string;
	items: string[];
};

export type ExperienceRole = {
	company: string;
	title: string;
	period: string;
	location: string;
	summary: string;
	highlights: string[];
	stack: string[];
};

export type Project = {
	id: string;
	name: string;
	role: string;
	period: string;
	company: string;
	featured: boolean;
	summary: string;
	problem: string;
	impact: string[];
	stack: string[];
};

export type EducationItem = {
	school: string;
	degree: string;
	period: string;
	location: string;
};

export type Accomplishment = {
	title: string;
	year: string;
};

export type PersonalProject = {
	name: string;
	period: string;
	summary: string;
	stack: string[];
};
