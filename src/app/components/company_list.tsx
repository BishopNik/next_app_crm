/** @format */

import React from 'react';
import CompanyItem from './company_item';
import style from './company_list.module.css';
import style_sup from './company_item.module.css';

type Company = {
	titleCompany: string;
	status: string;
	statusPromo: string;
	country: string;
	data: string;
};

type CompanyListProps = {
	companies: Company[];
};

function CompanyList({ companies }: CompanyListProps) {
	return (
		<>
			<div className={style.main}>
				<ul className={style.header}>
					<li className={style_sup.product} style={{ paddingRight: '126px' }}>
						Category
					</li>
					<li className={style_sup.company}>Company</li>
					<li className={style_sup.status}>Status</li>
					<li className={style_sup.promo}>Promotion</li>
					<li className={style_sup.country}>Country</li>
					<li className={style_sup.data}>Joined data</li>
				</ul>
				<ul className={style.companies}>
					{companies.map((company, i) => (
						<li key={i}>
							<CompanyItem company={company} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default CompanyList;
