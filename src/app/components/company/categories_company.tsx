/** @format */

import React from 'react';
import { Category } from './category_of';
import CategoryBlock from './category_of';
import styles from './categories_company.module.css';

interface CategoriesCompanyProps {
	categories: Category[];
}

function CategoriesCompany({ categories }: CategoriesCompanyProps) {
	return (
		<div className={styles.main}>
			<p className={styles.title}>Categories of companies</p>
			<ul className={styles.list}>
				{categories.map((category, index) => (
					<li key={index}>
						<CategoryBlock data={category} ext={index % 2 === 0} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default CategoriesCompany;
