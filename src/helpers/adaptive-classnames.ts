import { Attributes } from './../@types';

/**
 * Generates classnames of the block
 */
import classNames from 'classnames';

/**
 * @param attributes
 */
const prepareAdaptiveClassnames = ( attributes: Attributes ) => {
	return classNames(
		{ 'mobile-heading-none': ! attributes[ 'mobile-headingShow' ] },
		{ 'tablet-heading-none': ! attributes[ 'tablet-headingShow' ] },
		{ 'desktop-heading-none': ! attributes[ 'desktop-headingShow' ] },
		{ 'mobile-description-none': ! attributes[ 'mobile-descriptionShow' ] },
		{ 'tablet-description-none': ! attributes[ 'tablet-descriptionShow' ] },
		{
			'desktop-description-none':
				! attributes[ 'desktop-descriptionShow' ],
		},
		{ 'mobile-button-none': ! attributes[ 'mobile-buttonShow' ] },
		{ 'tablet-button-none': ! attributes[ 'tablet-buttonShow' ] },
		{ 'desktop-button-none': ! attributes[ 'desktop-buttonShow' ] }
	);
};

export default prepareAdaptiveClassnames;
