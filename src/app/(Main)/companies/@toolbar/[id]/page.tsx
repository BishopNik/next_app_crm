/** @format */

'use client';

import FindInput from '@/app/components/blocks/find_input';
import AddPromotionCompany from '@/app/components/button/add_button_promotion';

export interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
	return (
		<>
			<FindInput />
			<AddPromotionCompany />
		</>
	);
}
