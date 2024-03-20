/** @format */

import SalesDetailsTable from '@/app/components/blocks/sales_details_table';
import SalesDetailsItems from '@/app/components/blocks/sales_details_item';
import { getSummarySales } from '@/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
	const sales = await getSummarySales();

	return (
		<SalesDetailsTable>
			<SalesDetailsItems sales={sales} />
		</SalesDetailsTable>
	);
}
