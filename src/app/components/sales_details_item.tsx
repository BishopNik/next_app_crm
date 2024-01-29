/** @format */
import React from 'react';
import Image from 'next/image';
import styles from './sales_details.module.css';
import clsx from 'clsx';

interface Sales {
	logo: string;
	companyName: string;
	sold: number;
	income: number;
}

interface SalesDetailsItemsProps {
	sales: Sales[];
}

function SalesDetailsItems({ sales }: SalesDetailsItemsProps) {
	return (
		<tbody>
			{sales.map(({ logo, companyName, sold, income }, index) => (
				<tr key={index} className={clsx(styles.row, index % 2 === 0 && styles.row_add)}>
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
