/** @format */

'use client';

import React, { InputHTMLAttributes, useRef } from 'react';
import { Field, FieldAttributes } from 'formik';
import styles from './upload-field.module.css';
import UploadCenterSVG from '../icon/upload-center-icon';

export interface UploadFieldProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Pick<FieldAttributes<string>, 'as'> {
	label?: string;
}

function UploadField({ label, id, style, ...rest }: UploadFieldProps) {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleUploadClick = () => {
		if (fileInputRef.current) fileInputRef.current.click();
	};

	const uploadInputStyles: React.CSSProperties =
		label === 'Image'
			? {
					borderRadius: '4px',
					width: '308px',
					height: '184px',
				}
			: {
					borderRadius: '50%',
					width: '176px',
					height: '176px',
				};

	const mainStyles: React.CSSProperties =
		label === 'Image'
			? {
					flexDirection: 'column',
					gap: '8px',
				}
			: {
					flexDirection: 'row',
					gap: '20px',
				};

	return (
		<div className={styles.main} style={mainStyles}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<div
				className={styles.upload_field}
				style={uploadInputStyles}
				onClick={handleUploadClick}
			>
				<Field
					id={id}
					className={styles.upload_input}
					{...rest}
					type='file'
					accept='image/*'
					innerRef={fileInputRef}
				/>
				<UploadCenterSVG />
				<p>Upload photo</p>
			</div>
		</div>
	);
}

export default UploadField;
