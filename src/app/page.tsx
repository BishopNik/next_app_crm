/** @format */

import AddButtonCompany from '@/app/components/button/add_button_company';
import AddPromotionCompany from '@/app/components/button/add_button_promotion';
import CompanyList from '@/app/components/company/company_list';
import PromoDetails from '@/app/components/promotion/promo_detail';
import CompanyDetails from '@/app/components/company/company_details';
import CategoriesCompany from '@/app/components/company/_categories_company';
import TotalInfo from '@/app/components/blocks/_total_info';
import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import CompanyItems from '@/app/components/company/company_item';
import CountriesCompanies from '@/app/components/company/_countries_companies';
import Sidebar from '@/app/components/blocks/sidebar';
import FindInput from '@/app/components/blocks/find_input';
import {
	getSummaryCompanies,
	getSummaryPromotions,
	getSummaryCategories,
	getSummaryStats,
	getCompanyPromo,
} from '@/api';

export default async function Home() {
	const companies = await getSummaryCompanies();
	const categories = await getSummaryCategories();
	const promotions = await getSummaryPromotions();
	const count = await getSummaryStats();
	const companyPromo = await getCompanyPromo();

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
				<Sidebar />
				<div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
					<TotalInfo count={count} />

					<div style={{ display: 'flex', paddingLeft: '40px', gap: '20px' }}>
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
				<Sidebar />
				<div>
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
				<Sidebar />
				<div>
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
