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
import CompanyItems from '@/app/components/company/company_item';
import SalesDetailsTable from '@/app/components/blocks/sales_details_table';
import SalesDetailsItems from '@/app/components/blocks/sales_details_item';
import CountriesCompanies from '@/app/components/company/countries_companies';
import Sidebar from '@/app/components/blocks/sidebar';
import Header from '@/app/components/blocks/header';
import FindInput from '@/app/components/blocks/find_input';
import {
	getSummaryCompanies,
	getSummaryPromotions,
	getSummaryCategories,
	getSummaryStats,
	getCompanyPromo,
} from '@/api';

export async function state() {
	const companies = await getSummaryCompanies();
	const categories = await getSummaryCategories();
	const promotions = await getSummaryPromotions();
	const count = await getSummaryStats();
	const companyPromo = await getCompanyPromo();

	return { companies, categories, promotions, count, companyPromo };
}

export default async function Home() {
	const { companies, categories, promotions, count, companyPromo } = await state();

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
							<SalesDetailsItems />
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
						<CompanyItems companies={companies} />
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
