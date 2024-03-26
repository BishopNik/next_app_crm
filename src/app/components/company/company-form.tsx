/** @format */

'use client';

import React from 'react';
import styles from './company-form.module.css';
import InputField from '../blocks/input-field';
import UploadField from '../blocks/upload-field';
import { Formik, Form, FormikHelpers } from 'formik';
import clsx from 'clsx';
import Button from '../button/button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
	getCompanies,
	createCompany,
	getCountries,
	getCategories,
	Company,
	StatusText,
} from '@/lib/api';

interface CompanyFormProps {
	onClose: () => void;
}
type CompanyFieldValues = {
	title: string;
	description: string;
	status: keyof typeof StatusText;
	joinedDate: string;
	categoryId: string;
	countryId: string;
};

const initValue: CompanyFieldValues = {
	status: getKeyByValue(Object.keys(StatusText)[0]),
	title: '',
	joinedDate: '',
	description: '',
	categoryId: '',
	countryId: '',
};

function getKeyByValue(value: string): keyof typeof StatusText {
	for (const key in StatusText) {
		if (key === value) {
			return key as keyof typeof StatusText;
		}
	}
	return 'notActive' as keyof typeof StatusText;
}

function CompanyForm({ onClose }: CompanyFormProps) {
	const queryClient = useQueryClient();

	const { data: companies } = useQuery({
		queryKey: ['companies'],
		queryFn: () => getCompanies(),
		staleTime: 10 * 1000,
	});

	const { data: countries } = useQuery({
		queryKey: ['countries'],
		queryFn: getCountries,
		staleTime: 10 * 1000,
	});

	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: getCategories,
		staleTime: 10 * 1000,
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: createCompany,
		onSuccess: () => {
			//(data)
			queryClient.invalidateQueries({
				queryKey: ['companies'],
				exact: true,
			});
			// queryClient.setQueryData(['companies'], (oldData: Company[]) => {
			// 	if (data) {
			// 		return oldData.concat(data);
			// 	}
			// });
		},
	});

	const handleSubmit = async (
		data: CompanyFieldValues,
		action: FormikHelpers<CompanyFieldValues>
	): Promise<void> => {
		if (!companies) {
			throw new Error('Companies is null');
		}

		await mutateAsync({
			...data,
			countryTitle: countries?.find(c => c.id === data.countryId)?.title ?? '',
			categoryTitle: categories?.find(c => c.id === data.categoryId)?.title ?? '',
			status: getKeyByValue(data.status),
		});

		action.resetForm();
		if (onClose) onClose();
	};

	return (
		<Formik initialValues={initValue} onSubmit={handleSubmit}>
			<Form className={styles.form}>
				<p className={styles.title}>Add new company</p>
				<ul className={styles.flex_field}>
					<li className={clsx(styles.flex_field_sup, styles.add)}>
						<UploadField label='Logo' name='avatar' id='avatar' />
						<div className={clsx(styles.flex_field_col, styles.add)}>
							<InputField
								required
								label='Status'
								as='select'
								placeholder='Title'
								name='status'
								id='status'
							>
								{Object.values(StatusText)?.map(st => (
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
								name='countryId'
								id='countryId'
							>
								<option value='' disabled>
									Select Country
								</option>
								{countries?.map(country => (
									<option key={country.id} value={country.id}>
										{country.title}
									</option>
								))}
							</InputField>
						</div>
					</li>
					<li className={styles.flex_field_col}>
						<InputField
							required
							label='Name'
							type='text'
							placeholder='Title'
							name='title'
							id='title'
							autoComplete='off'
						/>
						<InputField
							required
							label='Category'
							as='select'
							placeholder='Title'
							name='categoryId'
							id='categoryId'
						>
							<option value='' disabled>
								Select Category
							</option>
							{categories?.map(cat => (
								<option key={cat.id} value={cat.id}>
									{cat.title}
								</option>
							))}
						</InputField>
						<InputField
							required
							label='Joined data'
							type='date'
							placeholder='14.02.2021'
							name='joinedDate'
							id='joinedDate'
							style={{ cursor: 'pointer' }}
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
					</li>
				</ul>

				<Button style={{ width: '100%' }} type='submit' disabled={isPending}>
					Add company
				</Button>
			</Form>
		</Formik>
	);
}

export default CompanyForm;
