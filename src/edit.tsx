import React, { useState } from '@wordpress/element';

/**
 * Types
 */
import { BlockEditProps, Template } from '@wordpress/blocks';
import { Devices, Attributes } from './@types';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * Wp components
 */
import {
	Card,
	CardHeader,
	CardBody,
	Tooltip,
	ButtonGroup,
	Button,

	// @ts-ignore
	__experimentalHeading as Heading,
} from '@wordpress/components';
import { desktop, tablet, mobile } from '@wordpress/icons';
import Settings from './components/Settings';

/**
 * helpers
 */
import prepareAdaptiveBgColor from './helpers/adaptive-style-bg-color';
import prepareAdaptiveClassnames from './helpers/adaptive-classnames';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const TEMPLATE: readonly Template[] = [
	[
		'core/heading',
		{
			textAlign: 'center',
			level: 2,
			placeholder: __( 'Call To Action Heading', 'cta-plugin' ),
			className: 'cta-plugin-heading',
		},
	],
	[
		'core/group',
		{
			className: 'cta-plugin-description',
		},
		[
			[
				'core/paragraph',
				{
					align: 'center',
					placeholder: __(
						'Call To Action Description',
						'cta-plugin'
					),
				},
			],
		],
	],
	[
		'core/buttons',
		{
			layout: {
				type: 'flex',
				justifyContent: 'center',
			},
			className: 'cta-plugin-buttons',
		},
		[
			[
				'core/button',
				{
					placeholder: __( 'Call To Action button', 'cta-plugin' ),
				},
			],
		],
	],
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< Attributes > ) => {
	/**
	 * переключение настроек для устройств
	 */
	const [ device, setDevice ] = useState< Devices >( 'desktop' );

	/**
	 * Generates classNames of the block
	 */
	const blockProps = useBlockProps( {
		className: prepareAdaptiveClassnames( attributes ),
		style: prepareAdaptiveBgColor( attributes ),
	} );

	return (
		<>
			<InspectorControls>
				<Card>
					<CardHeader>
						<Heading level={ 5 }>
							{ __( 'CTA Options', 'cta-plugin' ) }
						</Heading>
						<ButtonGroup>
							<Tooltip
								text={ __( 'Desktop settings', 'cta-plugin' ) }
							>
								<Button
									variant="secondary"
									isSmall
									icon={ desktop }
									iconSize="18px"
									isPressed={ device === 'desktop' }
									onClick={ () => setDevice( 'desktop' ) }
								/>
							</Tooltip>
							<Tooltip
								text={ __( 'Tablet settings', 'cta-plugin' ) }
							>
								<Button
									variant="secondary"
									isSmall
									icon={ tablet }
									iconSize="18px"
									isPressed={ device === 'tablet' }
									onClick={ () => setDevice( 'tablet' ) }
								/>
							</Tooltip>
							<Tooltip
								text={ __( 'Mobile settings', 'cta-plugin' ) }
							>
								<Button
									variant="secondary"
									isSmall
									icon={ mobile }
									iconSize="18px"
									isPressed={ device === 'mobile' }
									onClick={ () => setDevice( 'mobile' ) }
								/>
							</Tooltip>
						</ButtonGroup>
					</CardHeader>
					<CardBody>
						<Settings
							device={ device }
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					</CardBody>
				</Card>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks template={ TEMPLATE } templateLock="all" />
			</div>
		</>
	);
};

export default Edit;
