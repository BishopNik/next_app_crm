/** @format */

import CompanyList from '@/app/components/company/company_list';
import CompanyItems from '@/app/components/company/company_item';
import { getCompanies } from '@/lib/api';

export interface CompaniesProps {}

export default async function Companies({}: CompaniesProps) {
	const companies = await getCompanies();

	return (
		<CompanyList>
			<CompanyItems companies={companies} />
		</CompanyList>
	);
}
