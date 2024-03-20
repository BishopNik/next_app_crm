/** @format */

'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import AddPromotionCompany from '@/app/components/button/add_button_promotion';
import CompanyDetails from '@/app/components/company/company_details';
import PromoDetails from '@/app/components/promotion/promo_detail';
import FindInput from '@/app/components/blocks/find_input';
import { state } from '@/app/page';
import { CompanyItem } from '@/app/components/company/company_item';
import { PromoDetailsProps } from '@/app/components/promotion/promo_detail';
import Header from '@/app/components/blocks/header';

export interface PageProps {
	params: { id: string };
}

export default function Company({ params: { id } }: PageProps) {
	const [companies, setCompanies] = useState<CompanyItem[] | null>(null);
	const [companyPromoState, setCompanyPromoState] = useState<PromoDetailsProps | null>(null);

	useEffect(() => {
		async function fetchData() {
			const { companies, companyPromo } = await state();
			setCompanies(companies);
			setCompanyPromoState({ companyPromo });
		}

		fetchData();
	}, []);

	useEffect(() => {
		if (isNaN(parseInt(id))) notFound();
		if (companies !== null && !companies[Number(id)]) notFound();
	}, [companies, id]);

	return (
		<div>
			<Header>Costco Wholesale</Header>
			<div
				style={{
					padding: '32px 40px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<FindInput />
				<AddPromotionCompany />
			</div>

			<div
				style={{
					display: 'flex',
					gap: '20px',
					paddingLeft: '40px',
					width: '1200px',
					height: 'calc(100vh - 201px)',
					overflow: 'scroll',
				}}
			>
				{companies !== null && companies?.length >= Number(id) && (
					<CompanyDetails company={companies[Number(id)]} />
				)}

				<ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
					{companyPromoState &&
						Array.from({ length: 6 }).map((_, index) => (
							<PromoDetails
								key={index}
								companyPromo={companyPromoState.companyPromo}
							/>
						))}
				</ul>
			</div>
		</div>
	);
}
