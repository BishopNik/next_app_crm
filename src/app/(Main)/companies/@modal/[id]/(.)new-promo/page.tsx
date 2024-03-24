/** @format */

'use client';

import React from 'react';
import Modal from '@/app/components/blocks/modal';
import PromotionForm from '@/app/components/promotion/promotion_form';
import { useRouter } from 'next/navigation';

interface ModalComProps {
	params: { id: string };
}

function ModalCom({ params: { id } }: ModalComProps) {
	const router = useRouter();
	return (
		<Modal show={true} onClose={() => router.back()}>
			<div style={{ width: '308px' }}>
				<PromotionForm onClose={() => router.back()} companyId={id} />
			</div>
		</Modal>
	);
}

export default ModalCom;
