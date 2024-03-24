/** @format */
import React from 'react';
import Image from 'next/image';
import styles from './sales_details.module.css';
import clsx from 'clsx';
import { SummarySales } from '@/lib/api';

interface SalesProps {
	sales: SummarySales[] | null;
}

async function SalesDetailsItems({ sales }: SalesProps) {
	return (
		<tbody>
			{sales &&
				sales.map(({ companyId, companyTitle, sold, income }) => (
					<tr
						key={companyId}
						className={clsx(
							styles.row,
							parseInt(companyId) % 2 !== 0 && styles.row_add
						)}
					>
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
						<td className={clsx(styles.colomn, styles.row_sold)}>{sold}</td>
						<td className={clsx(styles.colomn, styles.row_income)}>${income}</td>
					</tr>
				))}
		</tbody>
	);
}

export default SalesDetailsItems;
