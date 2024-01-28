/** @format */

import React from 'react';
import Image from 'next/image';
import StatusComponent from '@/app/components/status_component';
import PromoStatusComponent from '@/app/components/status_promo';
import { StatusText } from './status_component';
import styles from './company_item.module.css';

export interface Company {
	logo: string;
	name: string;
	category: string;
	status: keyof typeof StatusText;
	statusPromo: keyof typeof StatusText;
	country: string;
	data: string;
	description: string;
}

export type CompanyItemProps = {
	companies: Company[];
};

function CompanyItem({ companies }: CompanyItemProps) {
	function getRandomColor() {
		const colors = ['#fb923c', '#60a5fa', '#fb7185', '#34d399', '#c084fc', '#1d4ed8'];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}

	return (
		<tbody>
			{companies.map(
				({ logo, name, category, status, statusPromo, country, data }, index) => (
					<>
						<tr key={index} className={styles.main}>
							<td className={styles.colomn}>
								<div
									className={styles.deco}
									style={{ backgroundColor: getRandomColor() }}
								></div>
								<span className={styles.product}>{category}</span>
							</td>

							<td className={styles.colomn}>
								<Image
									className={styles.logo}
									src={logo}
									alt='Company logo'
									width={80}
									height={80}
								/>
								<span className={styles.a}>{name}</span>
							</td>
							<td className={styles.colomn}>
								<StatusComponent type={status} />
							</td>
							<td className={styles.colomn}>
								<PromoStatusComponent type={statusPromo} />
							</td>
							<td className={styles.colomn}>{country}</td>
							<td className={styles.colomn}>{data}</td>
						</tr>
						<tr className={styles.space}></tr>
					</>
				)
			)}
		</tbody>
	);
}

export default CompanyItem;
