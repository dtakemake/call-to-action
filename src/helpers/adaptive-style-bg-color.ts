import { Attributes } from './../@types';

/**
 * @param attributes
 */
const prepareAdaptiveBgColor = ( attributes: Attributes ) => {
	const style = {};

	if ( attributes[ 'mobile-backgroundColor' ] !== '' ) {
		style[
			'--cta--mobile--bgColor'
		] = `var(--wp--preset--color--${ attributes[ 'mobile-backgroundColor' ] })`;
	}

	if ( attributes[ 'tablet-backgroundColor' ] !== '' ) {
		style[
			'--cta--tablet--bgColor'
		] = `var(--wp--preset--color--${ attributes[ 'tablet-backgroundColor' ] })`;
	}

	if ( attributes[ 'desktop-backgroundColor' ] !== '' ) {
		style[
			'--cta--desktop--bgColor'
		] = `var(--wp--preset--color--${ attributes[ 'desktop-backgroundColor' ] })`;
	}

	return style;
};

export default prepareAdaptiveBgColor;
