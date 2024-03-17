/** @format */

import AddButtonCompany from '@/app/components/button/add_button_company';
import CompanyList from '@/app/components/company/company_list';
import CompanyItem from '@/app/components/company/company_item';
import Sidebar from '@/app/components/blocks/sidebar';
import Header from '@/app/components/blocks/header';
import FindInput from '@/app/components/blocks/find_input';

export default function Companies() {
	function getRandomStatus() {
		const statuses = ['active', 'not_active', 'suspended', 'pending'] as const;
		const randomIndex = Math.floor(Math.random() * statuses.length);
		return statuses[randomIndex];
	}

	const companies = [];
	for (let i = 0; i < 11; i++) {
		const company = {
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			name: 'Costco Wholesale',
			category: 'product',
			status: getRandomStatus(),
			statusPromo: getRandomStatus(),
			country: 'USA',
			data: '24.10.2012',
			description:
				'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
		};

		companies.push(company);
	}

	const categories = [];
	for (let i = 0; i < 8; i++) {
		categories.push({
			groupItems: 'Products',
			countItems: Math.floor(Math.random() * 1001),
		});
	}

	const promotions = [];
	for (let i = 0; i < 7; i++) {
		promotions.push({
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			companyName: 'Costco Wholesale',
			promotionName: 'Norem ipsum dolor',
			countItems: Math.floor(Math.random() * 100),
		});
	}

	const sales = [];
	for (let i = 0; i < 6; i++) {
		sales.push({
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			companyName: 'Costco Wholesale',
			sold: Math.floor(Math.random() * 1000),
			income: Math.floor(Math.random() * 1000),
		});
	}

	return (
		<main style={{ display: 'flex', alignItems: 'flex-start' }}>
			<Sidebar link={'Companies'} />
			<div>
				<Header page={'Companies'} />
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
					<CompanyItem companies={companies} />
				</CompanyList>
			</div>
		</main>
	);
}
