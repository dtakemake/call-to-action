type Devices = 'desktop' | 'tablet' | 'mobile';

type Attributes = Record<
	| 'mobile-headingShow'
	| 'mobile-descriptionShow'
	| 'mobile-buttonShow'
	| 'tablet-headingShow'
	| 'tablet-descriptionShow'
	| 'tablet-buttonShow'
	| 'desktop-headingShow'
	| 'desktop-descriptionShow'
	| 'desktop-buttonShow',
	boolean
> &
	Record<
		| 'mobile-backgroundColor'
		| 'tablet-backgroundColor'
		| 'desktop-backgroundColor',
		string
	>;

export type { Devices, Attributes };
