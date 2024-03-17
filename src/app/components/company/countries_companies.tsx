/** @format */

import React from 'react';
import styles from './countries_companies.module.css';
import { getSummaryCountries } from '@/api';

interface ItemCountry {
	countryId: number;
	countryTitle: string;
	count: number;
}

const CountriesCompanies: React.FC = async () => {
	const data: ItemCountry[] = await getSummaryCountries();
	return (
		<div className={styles.main}>
			<div className={styles.world}></div>
			<p className={styles.title}>Countries of companies</p>
			<ul className={styles.country_list}>
				{data.map(({ countryId, countryTitle, count }) => (
					<li key={countryId} className={styles.country}>
						<div className={styles.deco}></div>
						<span>
							{countryTitle} - {count}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CountriesCompanies;
