/** @format */

import React from 'react';
import Image from 'next/image';
import StatusComponent from '@/app/components/status_component';
import styles from './company_details.module.css';
import { Company } from './company_item';

function CompanyDetails({ company }: { company: Company }) {
	const { logo, name, description, status, data, category, country } = company;

	return (
		<div className={styles.main}>
			<div className={styles.company}>
				<Image
					className={styles.logo}
					src={logo}
					alt='Company logo'
					width={80}
					height={80}
				/>
				<span className={styles.title}>{name}</span>
				<StatusComponent type={status} />
			</div>
			<div className={styles.about}>
				<p className={styles.about_text}>About company</p>
				<p className={styles.category}>Category: {category}</p>
				<p className={styles.country}>Country: {country}</p>
				<p className={styles.data}>Joined data: {data}</p>
				<div className={styles.border}></div>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}

export default CompanyDetails;
