/** @format */

import PromotionTable from '@/app/components/promotion/promotion_table';
import PromotionItems from '@/app/components/promotion/promotion_items';
import { getPromotions } from '@/lib/api';

export interface PromotionsProps {}

export default async function Promotions({}: PromotionsProps) {
	const promotions = await getPromotions();
	const promo = promotions?.slice(0, 6) || null;

	return (
		<PromotionTable>
			<PromotionItems promotions={promo} />
		</PromotionTable>
	);
}
