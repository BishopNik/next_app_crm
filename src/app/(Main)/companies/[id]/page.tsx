/** @format */

'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import CompanyDetails from '@/app/components/company/company_details';
import PromoDetails from '@/app/components/promotion/promo_detail';
import { CompanyItem } from '@/app/components/company/company_item';
import { CompanyPromo } from '@/app/components/promotion/promo_detail';
import { getCompany, getPromotions } from '@/lib/api';

export interface CompanyProps {
	params: { id: string };
}

export default function Company({ params: { id } }: CompanyProps) {
	const [company, setCompany] = useState<CompanyItem | null>(null);
	const [promo, setPromo] = useState<CompanyPromo[] | null>(null);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		async function fetchData() {
			const company = await getCompany(id);
			if (!company) {
				setError(true);
				return;
			}
			setCompany(company);
			const promo = await getPromotions({ companyId: company.id });
			setPromo(promo);
		}

		fetchData();
	}, [id]);

	useEffect(() => {
		if (error) {
			setError(false);
			notFound();
		}
	}, [error]);

	useEffect(() => {
		if (isNaN(parseInt(id))) notFound();
	}, [id]);

	return (
		<div
			style={{
				display: 'flex',
				gap: '20px',
				paddingLeft: '40px',
				width: '1200px',
				marginTop: '8px',
			}}
		>
			{company !== null && <CompanyDetails company={company} />}

			<ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
				{promo && promo.map(p => <PromoDetails key={p.id} companyPromo={p} />)}
			</ul>
		</div>
	);
}
