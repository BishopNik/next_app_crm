/** @format */

import CategoriesCompany from '@/app/components/company/categories_company';
import TotalInfo from '@/app/components/blocks/total_info';
import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import SalesDetailsTable from '@/app/components/blocks/sales_details_table';
import SalesDetailsItems from '@/app/components/blocks/sales_details_item';
import CountriesCompanies from '@/app/components/company/countries_companies';
import Sidebar from '@/app/components/blocks/sidebar';
import Header from '@/app/components/blocks/header';

export default function Dashboard() {
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

	const count = {
		countPromo: 432,
		countCategory: 8,
		countCompany: 28,
		countActiveCompany: 570,
	};

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
			<Sidebar link={'Dashboard'} />
			<div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
				<Header page={'Dashboard'} />
				<TotalInfo count={count} />

				<div style={{ display: 'flex', paddingLeft: '40px', gap: '20px' }}>
					<SalesDetailsTable>
						<SalesDetailsItems sales={sales} />
					</SalesDetailsTable>
					<CategoriesCompany categories={categories} />
				</div>
				<div style={{ display: 'flex', paddingLeft: '40px', gap: '20px' }}>
					<CountriesCompanies />
					<PromotionTable>
						<PromotionItems promotions={promotions} />
					</PromotionTable>
				</div>
			</div>
		</main>
	);
}
