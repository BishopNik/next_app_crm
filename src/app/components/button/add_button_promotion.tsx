/** @format */

'use client';

import React from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';

interface AddPromotionCompanyProps {
	companyId: string;
}

function AddPromotionCompany({ companyId }: AddPromotionCompanyProps) {
	const router = useRouter();
	return (
		<>
			<Button onClick={() => router.push(`/companies/${companyId}/new-promo`)}>
				Add promotion
			</Button>
		</>
	);
}

export default AddPromotionCompany;
