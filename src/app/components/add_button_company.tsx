/** @format */

'use client';

import React, { useState } from 'react';
import Button from './button';
import Modal from './modal';
import CompanyForm from './company-form';

function AddButtonCompany() {
	const [show, setShow] = useState(false);
	return (
		<>
			<Button onClick={() => setShow(true)}>Add company</Button>
			<Modal show={show} onClose={() => setShow(false)}>
				<CompanyForm onClose={() => setShow(false)} />
			</Modal>
		</>
	);
}

export default AddButtonCompany;
