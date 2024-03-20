/** @format */

'use client';

import React from 'react';
import Button from '@/app/components/button/button';

interface ErrorComProps {
	error: Error;
	reset: () => void;
}

function ErrorCom({ error, reset }: ErrorComProps) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				gap: '20px',
				maxWidth: '1200px',
				flex: '1',
			}}
		>
			<p
				style={{
					padding: '40px 0',
				}}
			>{`Error... ${error.message}`}</p>
			<Button style={{ width: '200px' }} onClick={() => reset()}>
				Reload
			</Button>
		</div>
	);
}

export default ErrorCom;
