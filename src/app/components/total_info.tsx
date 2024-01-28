/** @format */

import React from 'react';
import styles from './total_info.module.css';

type TotalInfoProps = {
	count: {
		countPromo: number;
		countCategory: number;
		countCompany: number;
		countActiveCompany: number;
	};
};

function TotalInfo({ count }: TotalInfoProps) {
	const { countPromo, countCategory, countCompany, countActiveCompany } = count;
	return (
		<ul className={styles.main}>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>Total promotions</span>
				<p className={styles.count}>{countPromo}</p>
			</li>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>Total category</span>
				<p className={styles.count}>{countCategory}</p>
			</li>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>New companies</span>
				<p className={styles.count}>{countCompany}</p>
			</li>
			<li className={styles.item}>
				<div className={styles.line}></div>
				<span className={styles.title}>Total active companies</span>
				<p className={styles.count}>{countActiveCompany}</p>
			</li>
		</ul>
	);
}

export default TotalInfo;
