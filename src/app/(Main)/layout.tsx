/** @format */

import React from 'react';
import Sidebar from '@/app/components/blocks/sidebar';
import Header from '@/app/components/blocks/header';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Sidebar />
			<main
				style={{
					display: 'flex',
					alignItems: 'flex-start',
				}}
			>
				{children}
			</main>
		</>
	);
}
