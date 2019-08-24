export interface EventInfo {
	name: string;
	image: string;
	desc: string;
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
