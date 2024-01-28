/** @format */

import StatusComponent from '@/app/components/status_component';
import AddButtonCompany from '@/app/components/add_button_company';
import AddPromotionCompany from '@/app/components/add_promotion_button';
import CompanyList from '@/app/components/company_list';
import PromoDetails from '@/app/components/promo_detail';
import CompanyDetails from '@/app/components/company_details';
import CategoriesCompany from '@/app/components/categories_company';
import TotalInfo from '@/app/components/total_info';
import PromotionTable from '@/app/components/promotion_table';
import PromotionItems from '@/app/components/promotion_items';
import CompanyItem from './components/company_item';

export default function Home() {
	const company = {
		logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
		name: 'Costco Wholesale',
		category: 'product',
		status: 'active' as const,
		statusPromo: 'active' as const,
		country: 'USA',
		data: '24.10.2012',
		description:
			'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
	};

	const companies = [];
	for (let i = 0; i < 3; i++) {
		companies.push(company);
	}

	const companyPromo = {
		discountCount: 20,
		discountSrcImg: 'https://www.coral-print.ru/assets/images/printer-composition.jpg',
		discountTitle: 'Discount on this product',
		discountAbout: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit.',
	};

	const data = {
		groupItems: 'Products',
		countItems: Math.floor(Math.random() * 1001),
	};

	const categories = [];
	for (let i = 0; i < 7; i++) {
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
	for (let i = 0; i < 10; i++) {
		promotions.push({
			logo: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png',
			companyName: 'Costco Wholesale',
			promotionName: 'Norem ipsum dolor',
			countItems: Math.floor(Math.random() * 100),
		});
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
			<CompanyList>
				<CompanyItem companies={companies} />
			</CompanyList>
			<div style={{ display: 'flex', gap: '50px', padding: '100px' }}>
				<PromoDetails companyPromo={companyPromo} />
				<CompanyDetails company={company} />
			</div>
			<TotalInfo count={count} />
			<CategoriesCompany categories={categories} />
			<PromotionTable>
				<PromotionItems promotions={promotions} />
			</PromotionTable>
		</main>
	);
}
