/** @format */

'use client';

import React from 'react';
import Image from 'next/image';
import { getPromotions } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import styles from './promo_detail.module.css';

interface PromoDetailsProps {
	companyId: string;
}

function PromoDetails({ companyId }: PromoDetailsProps) {
	const { data: companyPromo } = useQuery({
		queryKey: ['promotions'],
		queryFn: () => getPromotions({ companyId }),
		staleTime: 10 * 1000,
	});

	return (
		<ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
			{companyPromo?.map(({ discount, title, description }, i) => (
				<li key={i} className={styles.main}>
					<div className={styles.image}>
						<div className={styles.discount}></div>
						<span className={styles.discountText}>-{discount} %</span>
						<Image
							className={styles.img}
							src={'https://www.coral-print.ru/assets/images/printer-composition.jpg'}
							alt='Promo product'
							width={268}
							height={160}
							priority
						/>
					</div>
					<div className={styles.text}>
						<p className={styles.title}>{title}</p>
						<span className={styles.about}>{description}</span>
					</div>
				</li>
			))}
		</ul>
	);
}

export default PromoDetails;
