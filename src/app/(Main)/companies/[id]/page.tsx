/** @format */

import AddPromotionCompany from '@/app/components/button/add_button_promotion';
import CompanyDetails from '@/app/components/company/company_details';
import PromoDetails from '@/app/components/promotion/promo_detail';
import FindInput from '@/app/components/blocks/find_input';
import { state } from '@/app/page';
import { Company } from '@/app/components/company/company_item';

export interface PageProps {
	params: { id: string };
}

export default async function Company({ params }: PageProps) {
	const { companies, companyPromo } = await state();

	return (
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
					height: 'calc(100vh - 201px)',
					overflow: 'scroll',
				}}
			>
				<CompanyDetails company={companies[Number(params.id)]} />
				<ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
					{Array.from({ length: 6 }).map((_, index) => (
						<PromoDetails key={index} companyPromo={companyPromo} />
					))}
				</ul>
			</div>
		</div>
	);
}
