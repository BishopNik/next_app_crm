/** @format */

'use client';

import React, { InputHTMLAttributes } from 'react';
import { Field, FieldAttributes } from 'formik';
import styles from './input-field.module.css';

export interface InputFieldProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Pick<FieldAttributes<string>, 'as'> {
	label?: string;
}

function InputField({ label, id, ...rest }: InputFieldProps) {
	return (
		<div className={styles.main}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}
			<Field id={id} className={styles.field} {...rest} />
		</div>
	);
}

export default InputField;
