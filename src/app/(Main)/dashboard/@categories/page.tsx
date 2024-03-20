/** @format */

import { getSummaryCategories } from '@/api';
import { Category } from '@/app/components/company/category_of';
import CategoryBlock from '@/app/components/company/category_of';
import styles from '@/app/components/company/categories_company.module.css';

export interface CategoriesProps {}

export default async function Categories({}: CategoriesProps) {
	const categories: Category[] = await getSummaryCategories();

	return (
		<li className={styles.main}>
			<p className={styles.title}>Categories of companies</p>
			<ul className={styles.list}>
				{categories.map(category => (
					<li key={category.categoryId}>
						<CategoryBlock data={category} ext={category.categoryId % 2 !== 0} />
					</li>
				))}
			</ul>
		</li>
	);
}
