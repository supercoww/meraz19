export interface EventInfo {
	name: string;
	image: string;
	descriptionFile: string;
	imageSize: string;
}

export interface Category {
	name: string;
	events: EventInfo[];
}

export interface Time {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export interface SponsorInfo {
	imageUrl: string;
	link: string;
}
