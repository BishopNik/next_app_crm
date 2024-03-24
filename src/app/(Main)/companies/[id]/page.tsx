/** @format */

import { notFound } from 'next/navigation';
import CompanyDetails from '@/app/components/company/company_details';
import PromoDetails from '@/app/components/promotion/promo_detail';
import { Company } from '@/lib/api';
import { getCompany, getPromotions } from '@/lib/api';
import { getQueryClient } from '@/lib/utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

export interface CompanyProps {
	params: { id: string };
}

export default async function Company({ params: { id } }: CompanyProps) {
	if (isNaN(parseInt(id))) {
		notFound();
	}

	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['company', id],
		queryFn: () => getCompany(id, { cache: 'no-store' }),
		staleTime: 10 * 1000,
	});

	await queryClient.prefetchQuery({
		queryKey: ['promotions', id],
		queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
		staleTime: 10 * 1000,
	});

	const company = queryClient.getQueryData(['company', id]) as Company;

	if (!company) notFound();

	const dehydrateState = dehydrate(queryClient);

	return (
		<HydrationBoundary state={dehydrateState}>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					paddingLeft: '40px',
					width: '1200px',
					marginTop: '8px',
				}}
			>
				<CompanyDetails companyId={id} />
				<PromoDetails companyId={id} />
			</div>
		</HydrationBoundary>
	);
}
