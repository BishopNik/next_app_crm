/** @format */

import CategoriesCompany from '@/app/components/company/categories_company';
import TotalInfo from '@/app/components/blocks/total_info';
import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import SalesDetailsTable from '@/app/components/blocks/sales_details_table';
import SalesDetailsItems from '@/app/components/blocks/sales_details_item';
import CountriesCompanies from '@/app/components/company/countries_companies';
import { state } from '@/app/page';

export default async function Dashboard() {
	const { categories, promotions, count } = await state();

	return (
		<div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
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
	);
}
