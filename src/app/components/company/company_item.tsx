/** @format */

import React from 'react';
import Image from 'next/image';
import StatusComponent from '@/app/components/blocks/status_component';
import PromoStatusComponent from '@/app/components/blocks/status_promo';
import { StatusText } from '../blocks/status_component';
import styles from './company_item.module.css';
import { getRandomColor } from '@/lib/utils';

export interface CompanyItem {
	companyId: number;
	logo: string;
	name: string;
	category: string;
	status: keyof typeof StatusText;
	statusPromo: keyof typeof StatusText;
	country: string;
	data: string;
	description: string;
}

export type CompanyItemsProps = {
	companies: CompanyItem[];
};

function CompanyItems({ companies }: CompanyItemsProps) {
	return (
		<tbody>
			{companies.map(
				({ companyId, logo, name, category, status, statusPromo, country, data }) => (
					<React.Fragment key={companyId}>
						<tr className={styles.main}>
							<td className={styles.colomn}>
								<div
									className={styles.deco}
									style={{ backgroundColor: getRandomColor() }}
								></div>
								<span className={styles.product}>{category}</span>
							</td>

							<td className={styles.colomn}>
								<a href={`/companies/${companyId}`}>
									<Image
										className={styles.logo}
										src={logo}
										alt='Company logo'
										width={80}
										height={80}
									/>
									<span className={styles.a}>{name}</span>
								</a>
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
					</React.Fragment>
				)
			)}
		</tbody>
	);
}

export default CompanyItems;
