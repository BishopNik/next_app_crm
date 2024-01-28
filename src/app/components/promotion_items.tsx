/** @format */
import React from 'react';
import Image from 'next/image';
import styles from './promotion_table.module.css';
import clsx from 'clsx';

interface Promotion {
	logo: string;
	companyName: string;
	promotionName: string;
	countItems: number;
}

interface PromotionItemsProps {
	promotions: Promotion[];
}

function PromotionItems({ promotions }: PromotionItemsProps) {
	return (
		<tbody>
			{promotions.map(({ logo, companyName, promotionName, countItems }, index) => (
				<tr key={index} className={clsx(styles.row, index % 2 !== 0 && styles.row_add)}>
					<td className={clsx(styles.colomn, styles.row_company)}>
						<Image
							className={styles.logo}
							src={logo}
							alt='Company logo'
							width={20}
							height={20}
						/>
						<span>{companyName}</span>
					</td>
					<td className={clsx(styles.colomn, styles.row_name)}>{promotionName}</td>
					<td className={clsx(styles.colomn, styles.row_discount)}>-{countItems}%</td>
				</tr>
			))}
		</tbody>
	);
}

export default PromotionItems;
