/** @format */

import FindInput from '@/app/components/blocks/find_input';
import AddButtonCompany from '@/app/components/button/add_button_company';

export interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
	return (
		<>
			<FindInput />
			<AddButtonCompany />
		</>
	);
}
