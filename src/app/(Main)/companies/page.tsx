/** @format */

import AddButtonCompany from '@/app/components/button/add_button_company';
import CompanyList from '@/app/components/company/company_list';
import CompanyItems from '@/app/components/company/company_item';
import FindInput from '@/app/components/blocks/find_input';
import { state } from '@/app/page';
import Header from '@/app/components/blocks/header';

export default async function Companies() {
	const { companies } = await state();

	return (
		<div>
			<Header>Companies</Header>
			<div
				style={{
					padding: '32px 40px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<FindInput />
				<AddButtonCompany />
			</div>

			<CompanyList>
				<CompanyItems companies={companies} />
			</CompanyList>
		</div>
	);
}
