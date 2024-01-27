/** @format */

'use client';

import React from 'react';
import styles from './promotion-form.module.css';
import InputField from './input-field';
import UploadField from './upload-field';
import { Formik, Form } from 'formik';
import Button from './button';

interface PromotionFormProps {
	onClose: () => void;
}

export type PromotionFieldValues = {
	upload: File | string;
	name: string;
	description: string;
	discount: number | string;
};

const initialValues: PromotionFieldValues = {
	upload: '',
	name: '',
	description: '',
	discount: '',
};

function PromotionForm({ onClose }: PromotionFormProps) {
	const handleSubmit = (data, action): void => {
		console.log(data);
		action.resetForm();
		onClose();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={styles.form}>
				<p className={styles.title}>Add promotion</p>
				<div className={styles.flex_field}>
					<InputField
						required
						label='Title'
						type='text'
						placeholder='Title'
						name='name'
						id='name'
						autoComplete='off'
					/>
					<InputField
						required
						label='Description'
						type='text'
						placeholder='Description'
						name='description'
						id='description'
						autoComplete='off'
					/>
					<InputField
						required
						label='Discount amount'
						type='number'
						placeholder='-40%'
						name='discount'
						id='discount'
						min={0}
						max={100}
						autoComplete='off'
					/>
					<UploadField
						required
						label='Image'
						placeholder='Upload photo'
						name='upload'
						id='upload'
					/>
					<Button style={{ width: '100%' }} type='submit'>
						Add promotion
					</Button>
				</div>
			</Form>
		</Formik>
	);
}

export default PromotionForm;
