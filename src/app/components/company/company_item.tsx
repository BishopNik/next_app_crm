/** @format */

import React from 'react';
import Image from 'next/image';
import StatusComponent from '@/app/components/blocks/status_component';
import PromoStatusComponent from '@/app/components/blocks/status_promo';
import { StatusText } from '../blocks/status_component';
import styles from './company_item.module.css';
import { getRandomColor } from '@/lib/utils';

export interface CompanyItem {
	id: string;
	title: string;
	categoryId: string;
	categoryTitle: string;
	status: string;
	hasPromotions: boolean;
	countryId: string;
	countryTitle: string;
	joinedDate: string;
	description: string;
}

export type CompanyItemsProps = {
	companies: CompanyItem[];
};

function CompanyItems({ companies }: CompanyItemsProps) {
	return (
		<tbody>
			{companies.map(
				({ id, title, categoryTitle, status, hasPromotions, countryTitle, joinedDate }) => (
					<React.Fragment key={id}>
						<tr className={styles.main}>
							<td className={styles.colomn}>
								<div
									className={styles.deco}
									style={{ backgroundColor: getRandomColor() }}
								></div>
								<span className={styles.product}>{categoryTitle}</span>
							</td>

							<td className={styles.colomn}>
								<a href={`/companies/${id}`}>
									<Image
										className={styles.logo}
										src={
											'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png'
										}
										alt='Company logo'
										width={80}
										height={80}
									/>
									<span className={styles.a}>{title}</span>
								</a>
							</td>
							<td className={styles.colomn}>
								<StatusComponent type={status} />
							</td>
							<td className={styles.colomn}>
								<PromoStatusComponent type={hasPromotions} />
							</td>
							<td className={styles.colomn}>{countryTitle}</td>
							<td className={styles.colomn}>{joinedDate.substring(0, 10)}</td>
						</tr>
						<tr className={styles.space}></tr>
					</React.Fragment>
				)
			)}
		</tbody>
	);
}

export default CompanyItems;
