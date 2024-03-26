/** @format */

'use client';

import React from 'react';
import styles from './promotion-form.module.css';
import InputField from '../blocks/input-field';
import UploadField from '../blocks/upload-field';
import { Formik, Form, FormikHelpers } from 'formik';
import Button from '../button/button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCompany, createPromotion } from '@/lib/api';

interface PromotionFormProps {
	companyId: string;
	onClose?: () => void;
}

export type PromotionFieldValues = {
	upload: File | string;
	title: string;
	description: string;
	discount: number | string;
};

const initialValues: PromotionFieldValues = {
	upload: '',
	title: '',
	description: '',
	discount: '',
};

function PromotionForm({ companyId, onClose }: PromotionFormProps) {
	const queryClient = useQueryClient();

	const { data: company } = useQuery({
		queryKey: ['company', companyId],
		queryFn: () => getCompany(companyId),
		staleTime: 10 * 1000,
		enabled: Boolean(companyId),
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: createPromotion,
		onSuccess: () => {
			//(data)
			queryClient.invalidateQueries({
				queryKey: ['promotions', companyId],
			});

			queryClient.invalidateQueries({
				queryKey: ['promotions'],
				exact: true,
			});
			// queryClient.setQueryData(['promotions', companyId], (oldData: Promotion[]) => {
			// 	if (data) {
			// 		return oldData.concat(data);
			// 	}
			// });

			// queryClient.setQueryData(['promotions'], (oldData: Promotion[]) => {
			// 	if (data) {
			// 		return oldData.concat(data);
			// 	}
			// });
		},
	});

	const handleSubmit = async (
		data: PromotionFieldValues,
		action: FormikHelpers<PromotionFieldValues>
	): Promise<void> => {
		if (!company) {
			throw new Error('Company is null');
		}
		await mutateAsync({
			...data,
			discount: Number(data.discount) || 0,
			companyId: company?.id || '',
			companyTitle: company?.title || '',
		});
		action.resetForm();
		if (onClose) onClose();
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
						name='title'
						id='title'
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
						label='Image'
						placeholder='Upload photo'
						name='upload'
						id='upload'
					/>
					<Button style={{ width: '100%' }} type='submit' disabled={isPending}>
						Add promotion
					</Button>
				</div>
			</Form>
		</Formik>
	);
}

export default PromotionForm;
