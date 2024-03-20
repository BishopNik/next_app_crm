/** @format */
import React from 'react';
import Image from 'next/image';
import styles from './sales_details.module.css';
import clsx from 'clsx';

interface Sale {
	saleId: number;
	logo: string;
	companyName: string;
	sold: number;
	income: number;
}

interface SalesProps {
	sales: Sale[];
}

async function SalesDetailsItems({ sales }: SalesProps) {
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
