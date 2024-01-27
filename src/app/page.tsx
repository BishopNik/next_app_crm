/** @format */

import StatusComponent from '@/app/components/statusComponent';
import AddButtonCompany from '@/app/components/add_button_company';
import AddPromotionCompany from '@/app/components/add_promotion_button';
import CompanyList from '@/app/components/company_list';

export default function Home() {
	const company = {
		titleCompany: 'Costco Wholesale',
		status: 'active',
		statusPromo: 'active',
		country: 'USA',
		data: '24.10.2012',
	};

	const companies = [];
	for (let i = 0; i < 3; i++) {
		companies.push(company);
	}

	return (
		<main>
			<h1 className='text-xl'>Hello world</h1>
			<StatusComponent type='active' />
			<StatusComponent type='not_active' disabled={true} />
			<StatusComponent type='pending' disabled={true} />
			<StatusComponent type='suspended' disabled={true} />
			<AddButtonCompany />
			<AddPromotionCompany />
			<CompanyList companies={companies} />
		</main>
	);
}
