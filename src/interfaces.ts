export interface EventInfo {
	name: string;
	image: string;
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
