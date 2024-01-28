/** @format */

import React, { ReactNode } from 'react';
import styles from './company_list.module.css';

type CompanyListProps = {
	children: ReactNode;
};

function CompanyList({ children }: CompanyListProps) {
	return (
		<>
			<div className={styles.main}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th className={styles.colomn}>Category</th>
							<th className={styles.colomn}>Company</th>
							<th className={styles.colomn}>Status</th>
							<th className={styles.colomn}>Promotion</th>
							<th className={styles.colomn}>Country</th>
							<th className={styles.colomn}>Joined data</th>
						</tr>
					</thead>
					{children}
				</table>
			</div>
		</>
	);
}

export default CompanyList;
