/** @format */

'use client';

import { useRouter } from 'next/navigation';
import CompanyForm from '@/app/components/company/company-form';

export interface NewCompanyProps {}

export default function NewCompany({}: NewCompanyProps) {
	const router = useRouter();

	return (
		<div style={{ marginLeft: 'auto', marginRight: 'auto', padding: '32px 40px' }}>
			<CompanyForm onClose={() => router.replace('/companies')} />
		</div>
	);
}
