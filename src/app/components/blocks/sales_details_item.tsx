/** @format */
import React from 'react';
import Image from 'next/image';
import styles from './sales_details.module.css';
import clsx from 'clsx';
import { getSummarySales } from '@/api';

interface Sales {
	saleId: number;
	logo: string;
	companyName: string;
	sold: number;
	income: number;
}

async function SalesDetailsItems() {
	const sales: Sales[] = await getSummarySales();

	return (
		<tbody>
			{sales.map(({ saleId, logo, companyName, sold, income }) => (
				<tr key={saleId} className={clsx(styles.row, saleId % 2 !== 0 && styles.row_add)}>
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
					<td className={clsx(styles.colomn, styles.row_sold)}>{sold}</td>
					<td className={clsx(styles.colomn, styles.row_income)}>${income}</td>
				</tr>
			))}
		</tbody>
	);
}

export default SalesDetailsItems;
