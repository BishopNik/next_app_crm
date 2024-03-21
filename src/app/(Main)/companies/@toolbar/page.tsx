/** @format */

import FindInput from '@/app/components/blocks/find_input';
import AddButtonCompany from '@/app/components/button/add_button_company';
import styles from './page.module.css';

export interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
	return (
		<div className={styles.toolbar}>
			<FindInput />
			<AddButtonCompany />
		</div>
	);
}
