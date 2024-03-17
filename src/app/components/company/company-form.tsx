/** @format */

'use client';

import React from 'react';
import styles from './company-form.module.css';
import InputField from '../blocks/input-field';
import UploadField from '../blocks/upload-field';
import { Formik, Form } from 'formik';
import Button from '../button/button';
import { StatusText } from '../blocks/status_component';

interface CompanyFormProps {
	onClose: () => void;
}

export interface CompanyFieldValues {
	logo: File | string;
	name: string;
	description: string;
	status: StatusText;
	join: string;
	category: string;
	country: string;
}

const initialValues: CompanyFieldValues = {
	logo: '',
	status: StatusText.active,
	country: '',
	name: '',
	category: '',
	join: '',
	description: '',
};

function CompanyForm({ onClose }: CompanyFormProps) {
	const handleSubmit = (data, action): void => {
		console.log(data);
		action.resetForm();
		onClose();
	};

	const statusValues = Object.values(StatusText);

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={styles.form}>
				<p className={styles.title}>Add new company</p>
				<div className={styles.flex_field}>
					<div className={styles.flex_field_sup}>
						<UploadField required label='Logo' name='logo' id='logo' />
						<div className={styles.flex_field_col}>
							<InputField
								required
								label='Status'
								as='select'
								placeholder='Title'
								name='status'
								id='status'
							>
								{statusValues?.map(st => (
									<option key={st} value={st}>
										{st}
									</option>
								))}
							</InputField>
							<InputField
								required
								label='Country'
								as='select'
								placeholder='Description'
								name='country'
								id='country'
							>
								<option key='defDescription' value='Description'>
									Description
								</option>
							</InputField>
						</div>
					</div>
					<div className={styles.flex_field_col}>
						<InputField
							required
							label='Name'
							type='text'
							placeholder='Title'
							name='name'
							id='name'
							autoComplete='off'
						/>
						<InputField
							required
							label='Category'
							as='select'
							placeholder='Title'
							name='category'
							id='category'
						>
							<option key='defTitle' value='Title'>
								Title
							</option>
						</InputField>
						<InputField
							required
							label='Joined data'
							type='date'
							placeholder='14.02.2021'
							name='join'
							id='join'
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
					</div>
				</div>

				<Button style={{ width: '100%' }} type='submit'>
					Add company
				</Button>
			</Form>
		</Formik>
	);
}

export default CompanyForm;
