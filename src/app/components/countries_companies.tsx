/** @format */

import React from 'react';
import styles from './countries_companies.module.css';

interface Item {
	countries: string;
	count: number;
}

interface CountriesCompaniesProps {
	data: Item[];
}

function CountriesCompanies({ data }: CountriesCompaniesProps) {
	return (
		<div className={styles.main}>
			<div className={styles.world}></div>
			<p className={styles.title}>Countries of companies</p>
			<ul className={styles.country_list}>
				{data.map(({ countries, count }, index) => (
					<li key={index} className={styles.country}>
						<div className={styles.deco}></div>
						<span>
							{countries} - {count}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CountriesCompanies;
