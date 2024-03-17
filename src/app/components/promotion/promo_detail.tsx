/** @format */

import React from 'react';
import Image from 'next/image';
import styles from './promo_detail.module.css';

interface PromoDetailsProps {
	companyPromo: {
		discountCount: number;
		discountSrcImg: string;
		discountTitle: string;
		discountAbout: string;
	};
}

function PromoDetails({ companyPromo }: PromoDetailsProps) {
	const { discountCount, discountSrcImg, discountTitle, discountAbout } = companyPromo;

	return (
		<li className={styles.main}>
			<div className={styles.image}>
				<div className={styles.discount}></div>
				<span className={styles.discountText}>-{discountCount} %</span>
				<Image
					className={styles.img}
					src={discountSrcImg}
					alt='Promo product'
					width={268}
					height={160}
				/>
			</div>
			<div className={styles.text}>
				<p className={styles.title}>{discountTitle}</p>
				<span className={styles.about}>{discountAbout}</span>
			</div>
		</li>
	);
}

export default PromoDetails;
