import React from '@wordpress/element';

/**
 * Types
 */
import { BlockSaveProps } from '@wordpress/blocks';
import { Attributes } from './@types';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * helpers
 */
import prepareAdaptiveBgColor from './helpers/adaptive-style-bg-color';
import prepareAdaptiveClassnames from './helpers/adaptive-classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const Save = ( { attributes }: BlockSaveProps< Attributes > ) => {
	const blockProps = useBlockProps.save( {
		className: prepareAdaptiveClassnames( attributes ),
		style: prepareAdaptiveBgColor( attributes ),
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
