/** @format */
import React, { ReactNode } from 'react';
import styles from './promotion_table.module.css';
import clsx from 'clsx';

function PromotionTable({ children }: { children: ReactNode }) {
	return (
		<li className={styles.main}>
			<p className={styles.title}>Promotions</p>
			<table>
				<thead className={styles.table}>
					<tr className={styles.table_head}>
						<th className={clsx(styles.colomn, styles.colomn_company)}>Company</th>
						<th className={clsx(styles.colomn, styles.colomn_name)}>Name</th>
						<th className={clsx(styles.colomn, styles.colomn_discount)}>%</th>
					</tr>
				</thead>
				{children}
			</table>
		</li>
	);
}

export default PromotionTable;
