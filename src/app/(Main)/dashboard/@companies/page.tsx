/** @format */

import styles from '@/app/components/blocks/total_info.module.css';
import { getSummaryStats } from '@/lib/api';

export interface CompaniesProps {}

export default async function Companies({}: CompaniesProps) {
	const stats = await getSummaryStats({
		next: {
			revalidate: 5,
		},
	});

	if (!stats) return null;

	const { promotions, categories, newCompanies, activeCompanies } = stats;

	return (
		<ul className={styles.main}>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>Total promotions</span>
				<p className={styles.count}>{promotions}</p>
			</li>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>Total category</span>
				<p className={styles.count}>{categories}</p>
			</li>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>New companies</span>
				<p className={styles.count}>{newCompanies}</p>
			</li>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>Total active companies</span>
				<p className={styles.count}>{activeCompanies}</p>
			</li>
		</ul>
	);
}
