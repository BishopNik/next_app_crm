/** @format */

'use client';

import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import StatusComponent from '@/app/components/blocks/status_component';
import styles from './company_details.module.css';
import { getCompany } from '@/lib/api';

interface CompanyDetails {
	companyId: string;
}

function CompanyDetails({ companyId }: CompanyDetails) {
	const { data: company } = useQuery({
		queryKey: ['company'],
		queryFn: () => getCompany(companyId),
		staleTime: 10 * 1000,
	});

	if (!company) return null;

	const { title, categoryTitle, status, countryTitle, joinedDate, description } = company;

	return (
		<div className={styles.main}>
			<div className={styles.company}>
				<Image
					className={styles.logo}
					src={
						'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png'
					}
					alt='Company logo'
					width={80}
					height={80}
				/>
				<span className={styles.title}>{title}</span>
				<StatusComponent type={status} />
			</div>
			<div className={styles.about}>
				<p className={styles.about_text}>About company</p>
				<p className={styles.category}>Category: {categoryTitle}</p>
				<p className={styles.country}>Country: {countryTitle}</p>
				<p className={styles.data}>Joined data: {joinedDate.substring(0, 10)}</p>
				<div className={styles.border}></div>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}

export default CompanyDetails;
