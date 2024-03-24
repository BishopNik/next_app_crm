/** @format */

'use client';

import { useRouter } from 'next/navigation';
import PromotionForm from '@/app/components/promotion/promotion_form';

export interface NewCompanyProps {
	params: { id: string };
}

export default function NewCompany({ params: { id } }: NewCompanyProps) {
	const router = useRouter();

	return (
		<div style={{ marginLeft: 'auto', marginRight: 'auto', padding: '32px 40px' }}>
			<PromotionForm onClose={() => router.back()} companyId={id} />
		</div>
	);
}
