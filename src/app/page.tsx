/** @format */

import AddButtonCompany from '@/app/components/button/add_button_company';
import AddPromotionCompany from '@/app/components/button/add_button_promotion';
import CompanyList from '@/app/components/company/company_list';
import PromoDetails from '@/app/components/promotion/promo_detail';
import CompanyDetails from '@/app/components/company/company_details';
import CategoriesCompany from '@/app/components/company/categories_company';
import TotalInfo from '@/app/components/blocks/total_info';
import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import CompanyItem from '@/app/components/company/company_item';
import SalesDetailsTable from '@/app/components/blocks/sales_details_table';
import SalesDetailsItems from '@/app/components/blocks/sales_details_item';
import CountriesCompanies from '@/app/components/company/countries_companies';
import Sidebar from '@/app/components/blocks/sidebar';
import Header from '@/app/components/blocks/header';
import FindInput from '@/app/components/blocks/find_input';
import { getSummaryCountries } from '@/api';

export default function Home() {
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

	const companyPromo = {
		discountCount: 20,
		discountSrcImg: 'https://www.coral-print.ru/assets/images/printer-composition.jpg',
		discountTitle: 'Discount on this product',
		discountAbout: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit.',
	};

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
		<main
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '25px',
				paddingBottom: '100px',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
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
			</div>

			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
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
			</div>

			<div style={{ display: 'flex', alignItems: 'flex-start' }}>
				<Sidebar link={'Costco Wholesale'} />
				<div>
					<Header page={'Costco Wholesale'} />
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
						}}
					>
						<CompanyDetails company={companies[0]} />
						<ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
							{Array.from({ length: 6 }).map((_, index) => (
								<PromoDetails key={index} companyPromo={companyPromo} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
