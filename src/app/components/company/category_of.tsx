/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './category_of.module.css';

interface CategoryBlockProps {
	title: string;
	count: number;
	ext: boolean;
}

function CategoryBlock({ title, count, ext }: CategoryBlockProps) {
	return (
		<div className={styles.main}>
			<div className={styles.line}></div>
			<p className={styles.group}>{title}</p>
			<p className={clsx(styles.count, ext && styles.extra)}>{count || 0}</p>
		</div>
	);
}

export default CategoryBlock;
