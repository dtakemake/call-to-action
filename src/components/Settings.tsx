import React from '@wordpress/element';

/**
 * Types
 */
import { Devices, Attributes } from './../@types';

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
// @ts-ignore
import { useSetting } from '@wordpress/block-editor';

/**
 * Wp components
 */
import { ToggleControl, SelectControl, Flex } from '@wordpress/components';

type Props = {
	device: Devices;
	attributes: Readonly< Attributes >;
	setAttributes: ( attrs: Partial< Attributes > ) => void;
};

const Settings = ( { device, attributes, setAttributes }: Props ) => {
	const colorPalette = useSetting( 'color.palette' ) ?? [];
	const palette = colorPalette.map( ( { name, slug } ) => {
		return {
			label: name,
			value: slug,
		};
	} );

	return (
		<>
			<Flex className="cta-flex-setting">
				<ToggleControl
					label={ __( 'Title', 'cta-plugin' ) }
					checked={ attributes[ `${ device }-headingShow` ] }
					onChange={ ( isChecked ) =>
						setAttributes( {
							[ `${ device }-headingShow` ]: isChecked,
						} )
					}
				/>
			</Flex>
			<Flex className="cta-flex-setting">
				<ToggleControl
					label={ __( 'Description', 'cta-plugin' ) }
					checked={ attributes[ `${ device }-descriptionShow` ] }
					onChange={ ( isChecked ) =>
						setAttributes( {
							[ `${ device }-descriptionShow` ]: isChecked,
						} )
					}
				/>
			</Flex>
			<Flex className="cta-flex-setting">
				<ToggleControl
					label={ __( 'Button', 'cta-plugin' ) }
					checked={ attributes[ `${ device }-buttonShow` ] }
					onChange={ ( isChecked ) =>
						setAttributes( {
							[ `${ device }-buttonShow` ]: isChecked,
						} )
					}
				/>
			</Flex>
			{ palette.length > 0 && (
				<Flex className="cta-flex-setting">
					<SelectControl
						label={ __( 'Background', 'cta-plugin' ) }
						value={ attributes[ `${ device }-backgroundColor` ] }
						onChange={ ( slug ) =>
							setAttributes( {
								[ `${ device }-backgroundColor` ]: slug,
							} )
						}
						options={ palette }
					/>
				</Flex>
			) }
		</>
	);
};

export default Settings;
