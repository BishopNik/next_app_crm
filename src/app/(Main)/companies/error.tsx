/** @format */

'use client';

import React from 'react';
import Button from '@/app/components/button/button';
import styles from './layout.module.css';

interface ErrorComProps {
	error: Error;
	reset: () => void;
}

function ErrorCom({ error, reset }: ErrorComProps) {
	return (
		<div className={styles.error_main}>
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
