/** @format */

'use client';

import React from 'react';
import Link from 'next/link';

interface NotFoundProps {}

function NotFound({}: NotFoundProps) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
				width: '1200px',
				padding: '30px',
			}}
		>
			<p style={{ padding: '20px' }}>Company not found</p>
			<Link style={{ color: 'blue' }} href='/companies'>
				Back to company
			</Link>
		</div>
	);
}

export default NotFound;
