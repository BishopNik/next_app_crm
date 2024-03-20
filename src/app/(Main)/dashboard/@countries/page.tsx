/** @format */

import styles from '@/app/components/company/countries_companies.module.css';
import { getSummaryCountries } from '@/api';

export interface CountriesProps {}

interface ItemCountry {
	countryId: number;
	countryTitle: string;
	count: number;
}

export default async function Countries({}: CountriesProps) {
	const data: ItemCountry[] = await getSummaryCountries();
	return (
		<li className={styles.main}>
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
		</li>
	);
}
