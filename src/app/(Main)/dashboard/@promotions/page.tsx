/** @format */

import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import { getPromotions } from '@/lib/api';

export interface PromotionsProps {}

export default async function Promotions({}: PromotionsProps) {
	const promotions = await getPromotions();

	return (
		<PromotionTable>
			<PromotionItems promotions={promotions.slice(0, 6)} />
		</PromotionTable>
	);
}
