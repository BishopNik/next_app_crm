/** @format */

import React from 'react';
import styles from './layout.module.css';

export interface LayoutProps {
	children: React.ReactNode;
	header: React.ReactNode;
	toolbar: React.ReactNode;
	modal: React.ReactNode;
}

function Layout({ children, toolbar, header, modal }: LayoutProps) {
	return (
		<div style={{ overflow: 'scroll', height: '100vh' }}>
			{modal}
			{header}
			{toolbar}
			<div className={styles.main_child}>{children}</div>
		</div>
	);
}

export default Layout;
