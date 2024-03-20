/** @format */
import React, { ReactNode } from 'react';
import styles from './sales_details.module.css';
import clsx from 'clsx';

function SalesDetailsTable({ children }: { children: ReactNode }) {
	return (
		<li className={styles.main}>
			<p className={styles.title}>Sales details</p>
			<table>
				<thead className={styles.table}>
					<tr className={styles.table_head}>
						<th className={clsx(styles.colomn, styles.colomn_company)}>Company</th>
						<th className={clsx(styles.colomn, styles.colomn_sold)}>Sold</th>
						<th className={clsx(styles.colomn, styles.colomn_income)}>Income</th>
					</tr>
				</thead>
				{children}
			</table>
		</li>
	);
}

export default SalesDetailsTable;
