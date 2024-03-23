/** @format */
import React from 'react';
import Image from 'next/image';
import styles from './promotion_table.module.css';
import clsx from 'clsx';

interface Promotion {
	description: string;
	companyId: string;
	id: string;
	companyTitle: string;
	title: string;
	discount: number;
}

interface PromotionItemsProps {
	promotions: Promotion[] | null;
}

function PromotionItems({ promotions }: PromotionItemsProps) {
	return (
		<tbody>
			{promotions &&
				promotions.map(({ companyTitle, title, discount }, index) => (
					<tr key={index} className={clsx(styles.row, index % 2 !== 0 && styles.row_add)}>
						<td className={clsx(styles.colomn, styles.row_company)}>
							<Image
								className={styles.logo}
								src={
									'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png'
								}
								alt='Company logo'
								width={20}
								height={20}
							/>
							<span>{companyTitle}</span>
						</td>
						<td className={clsx(styles.colomn, styles.row_name)}>{title}</td>
						<td className={clsx(styles.colomn, styles.row_discount)}>-{discount}%</td>
					</tr>
				))}
		</tbody>
	);
}

export default PromotionItems;
