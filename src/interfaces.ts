export interface EventBrief {
	name: string;
	image: string;
}

export interface Category {
	name: string;
	events: EventBrief[];
}
