/** @format */

import React from 'react';
import styles from './layout.module.css';

export interface LayoutProps {
	children: React.ReactNode;
	header: React.ReactNode;
	toolbar: React.ReactNode;
}

function Layout({ children, toolbar, header }: LayoutProps) {
	return (
		<div>
			{header}
			<div className={styles.main}>{toolbar}</div>
			{children}
		</div>
	);
}

export default Layout;
