import {
	trigger,
	transition,
	style,
	query,
	group,
	animate
} from '@angular/animations';

const isPhone = window.innerWidth <= 900;

const slideInDesktop = trigger('routeAnimations', [
	transition('* => home', slideTo('right')),
	transition('contact => events', slideTo('right')),
	transition('register => events', slideTo('right')),
	transition('register => contact', slideTo('right')),
	transition('event-info => events', slideTo('right')),
	transition('* <=> *', slideTo('left'))
]);

const slideInPhone = trigger('routeAnimations', [
	transition('* <=> *', slideTo('left'))
]);

export const slideIn = isPhone ? slideInPhone : slideInDesktop;

export function slideTo(direction) {
	return [
		query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
			optional: true
		}),
		group([
			query(
				':enter',
				[
					style({
						transform:
							'translateX(' +
							(direction === 'left' ? '' : '-') +
							'100%)'
					}),
					animate(
						'0.5s ease-in-out',
						style({ transform: 'translateX(0%)' })
					)
				],
				{ optional: true }
			),
			query(
				':leave',
				[
					style({ transform: 'translateX(0%)' }),
					animate(
						'0.5s ease-in-out',
						style({
							transform:
								'translateX(' +
								(direction === 'left' ? '-' : '+') +
								'100%)'
						})
					)
				],
				{ optional: true }
			)
		])
	];
}
