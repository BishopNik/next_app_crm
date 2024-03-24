/** @format */

'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import StatusComponent from '@/app/components/blocks/status_component';
import PromoStatusComponent from '@/app/components/blocks/status_promo';
import styles from './company_items.module.css';
import statusCSS from '../blocks/status_item.module.css';
import { getCompanies } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export type CompanyItemsProps = {};

function CompanyItems({}: CompanyItemsProps) {
	const { data: companies } = useQuery({
		queryKey: ['companies'],
		queryFn: () => getCompanies(),
		staleTime: 10 * 1000,
	});

	return (
		<tbody>
			{companies &&
				companies.map(
					({
						id,
						title,
						categoryTitle,
						status,
						hasPromotions,
						countryTitle,
						joinedDate,
					}) => (
						<React.Fragment key={id}>
							<tr className={styles.main}>
								<td className={styles.colomn}>
									<div className={clsx(styles.deco, statusCSS[status])}></div>
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
