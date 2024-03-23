/** @format */

import CompanyList from '@/app/components/company/company_list';
import CompanyItems from '@/app/components/company/company_item';
import { getCompanies } from '@/lib/api';
import { getQueryClient } from '@/lib/utils';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export interface CompaniesProps {}

export default async function Companies({}: CompaniesProps) {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['companies'],
		queryFn: () => getCompanies({ cache: 'no-store' }),
		staleTime: 10 * 1000,
	});

	const dehydrateStore = dehydrate(queryClient);

	return (
		<HydrationBoundary state={dehydrateStore}>
			<CompanyList>
				<CompanyItems />
			</CompanyList>
		</HydrationBoundary>
	);
}
