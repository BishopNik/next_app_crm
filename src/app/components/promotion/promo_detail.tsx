/** @format */

import React from 'react';
import Image from 'next/image';
import styles from './promo_detail.module.css';

export interface CompanyPromo {
	title: string;
	description: string;
	discount: number;
	companyId: string;
	companyTitle: string;
	id: string;
}

interface PromoDetailsProps {
	companyPromo: CompanyPromo;
}

function PromoDetails({ companyPromo }: PromoDetailsProps) {
	const { discount, title, description } = companyPromo;

	return (
		<li className={styles.main}>
			<div className={styles.image}>
				<div className={styles.discount}></div>
				<span className={styles.discountText}>-{discount} %</span>
				<Image
					className={styles.img}
					src={'https://www.coral-print.ru/assets/images/printer-composition.jpg'}
					alt='Promo product'
					width={268}
					height={160}
				/>
			</div>
			<div className={styles.text}>
				<p className={styles.title}>{title}</p>
				<span className={styles.about}>{description}</span>
			</div>
		</li>
	);
}

export default PromoDetails;
