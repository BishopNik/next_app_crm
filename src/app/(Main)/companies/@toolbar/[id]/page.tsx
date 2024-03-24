/** @format */

import FindInput from '@/app/components/blocks/find_input';
import AddPromotionCompany from '@/app/components/button/add_button_promotion';
import styles from '../page.module.css';

export interface ToolbarProps {
	params: { id: string };
}

export default function Toolbar({ params: { id } }: ToolbarProps) {
	return (
		<div className={styles.toolbar}>
			<FindInput />
			<AddPromotionCompany companyId={id} />
		</div>
	);
}
