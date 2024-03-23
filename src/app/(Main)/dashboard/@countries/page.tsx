/** @format */

import styles from '@/app/components/company/countries_companies.module.css';
import { getCompanies, getCountries } from '@/lib/api';
import { count } from '@/lib/utils';

export interface CountriesProps {}

interface ItemCountry {
	countryId: string;
	countryTitle: string;
	count: number;
}

export default async function Countries({}: CountriesProps) {
	const companies = await getCompanies();
	const countries = await getCountries();

	const counts = companies ? count(companies, 'countryId') : {};

	const data: ItemCountry[] = countries
		? countries
				.map(i => ({
					countryId: i.id,
					countryTitle: i.title,
					count: counts[i.id],
				}))
				.sort((a, b) => b.count - a.count)
		: [];

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
