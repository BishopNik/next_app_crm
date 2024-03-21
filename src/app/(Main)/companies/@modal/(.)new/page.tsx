/** @format */

'use client';

import React from 'react';
import Modal from '@/app/components/blocks/modal';
import CompanyForm from '@/app/components/company/company-form';
import { useRouter } from 'next/navigation';

interface ModalComProps {}

function ModalCom({}: ModalComProps) {
	const router = useRouter();
	return (
		<Modal show={true} onClose={() => router.back()}>
			<div style={{ width: '644px' }}>
				<CompanyForm onClose={() => router.back()} />
			</div>
		</Modal>
	);
}

export default ModalCom;
