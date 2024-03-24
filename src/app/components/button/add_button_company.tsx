/** @format */

'use client';

import React from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';

interface AddButtonCompanyProps {}

function AddButtonCompany({}: AddButtonCompanyProps) {
	const router = useRouter();
	return (
		<>
			<Button onClick={() => router.push('/companies/new')}>Add company</Button>
		</>
	);
}

export default AddButtonCompany;
