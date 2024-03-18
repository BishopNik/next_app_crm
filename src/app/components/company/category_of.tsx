/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './category_of.module.css';

export interface Category {
	categoryId: number;
	groupItems: string;
	countItems: number;
}

interface CategoryBlockProps {
	data: Category;
	ext: boolean;
}

function CategoryBlock({ data, ext }: CategoryBlockProps) {
	const { groupItems, countItems } = data;
	return (
		<>
			<div className={styles.main}>
				<div className={styles.line}></div>
				<p className={styles.group}>{groupItems}</p>
				<p className={clsx(styles.count, ext && styles.extra)}>{countItems}</p>
			</div>
		</>
	);
}

export default CategoryBlock;
