/** @format */

import React from 'react';
import styles from './layout.module.css';

export interface LayoutProps {
	children: React.ReactNode;
	categories: React.ReactNode;
	companies: React.ReactNode;
	promotions: React.ReactNode;
	sales: React.ReactNode;
	countries: React.ReactNode;
}

function Layout({ children, categories, companies, promotions, sales, countries }: LayoutProps) {
	return (
		<div className={styles.main}>
			{children}
			<main className={styles.slots}>
				{companies}
				<ul className={styles.block}>
					{sales}
					{categories}
				</ul>
				<ul className={styles.block}>
					{countries}
					{promotions}
				</ul>
			</main>
		</div>
	);
}

export default Layout;
