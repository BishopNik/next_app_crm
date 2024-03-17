/** @format */

'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '@/app/components/blocks/input-field';
import SearchSVG from '../../icon/search-icon';
import styles from './find_input.module.css';

const initialValues: { search: string } = {
	search: '',
};

function FindInput() {
	return (
		<Formik initialValues={initialValues} onSubmit={() => console.log('Enter')}>
			<Form className={styles.form}>
				<input
					className={styles.field}
					required
					type='text'
					placeholder='Search...'
					name='search'
					id='search'
					autoComplete='off'
				/>

				<button className={styles.button} type='submit'>
					<SearchSVG />
				</button>
			</Form>
		</Formik>
	);
}

export default FindInput;
