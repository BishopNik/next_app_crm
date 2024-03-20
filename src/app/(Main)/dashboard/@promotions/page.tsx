/** @format */

import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import { getSummaryPromotions } from '@/api';

export interface PromotionsProps {}

export default async function Promotions({}: PromotionsProps) {
	const promotions = await getSummaryPromotions();

	return (
		<PromotionTable>
			<PromotionItems promotions={promotions} />
		</PromotionTable>
	);
}
