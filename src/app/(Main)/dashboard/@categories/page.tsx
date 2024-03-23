/** @format */

import CategoryBlock from '@/app/components/company/category_of';
import styles from '@/app/components/company/categories_company.module.css';
import { getCategories, getCompanies } from '@/lib/api';
import { count } from '@/lib/utils';

export interface CategoriesProps {}

export default async function Categories({}: CategoriesProps) {
	const categories = await getCategories();
	const companies = await getCompanies();

	const counts = companies ? count(companies, 'categoryId') : {};

	return (
		<li className={styles.main}>
			<p className={styles.title}>Categories of companies</p>
			<ul className={styles.list}>
				{categories &&
					categories.map(category => (
						<li key={category.id}>
							<CategoryBlock
								title={category.title}
								count={counts[category.id]}
								ext={parseInt(category.id) % 2 !== 0}
							/>
						</li>
					))}
			</ul>
		</li>
	);
}
