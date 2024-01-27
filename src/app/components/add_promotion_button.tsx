/** @format */

'use client';

import React, { useState } from 'react';
import Button from './button';
import Modal from './modal';
import PromotionForm from './promotion_form';

function AddPromotionCompany() {
	const [show, setShow] = useState(false);
	return (
		<>
			<Button onClick={() => setShow(true)}>Add promotion</Button>
			<Modal show={show} onClose={() => setShow(false)}>
				<PromotionForm onClose={() => setShow(false)} />
			</Modal>
		</>
	);
}

export default AddPromotionCompany;
