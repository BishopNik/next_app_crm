/** @format */

import React from 'react';
import Sidebar from '@/app/components/blocks/sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
	return (
		<>
			<Sidebar />
			{children}
		</>
	);
}
