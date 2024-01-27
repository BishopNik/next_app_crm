/** @format */

import React from 'react';
import StatusComponent from '@/app/components/statusComponent';
import PromoStatusComponent from '@/app/components/status_promo';
import style from './company_item.module.css';

type CompanyItemProps = {
	company: {
		titleCompany: string;
		status: string;
		statusPromo: string;
		country: string;
		data: string;
	};
};

function CompanyItem({ company }: CompanyItemProps) {
	const { titleCompany, status, statusPromo, country, data } = company;

	function getRandomColor() {
		const colors = ['#fb923c', '#60a5fa', '#fb7185', '#34d399', '#c084fc', '#1d4ed8'];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}

	return (
		<>
			<ul className={style.main}>
				<li className={style.deco} style={{ backgroundColor: getRandomColor() }}></li>
				<li className={style.product}>Products</li>
				<li className={style.company}>
					<div className={style.logo}></div>
					<p className={style.title}>{titleCompany}</p>
				</li>
				<li className={style.status}>
					<StatusComponent type={status} />
				</li>
				<li className={style.promo}>
					<PromoStatusComponent type={statusPromo} />
				</li>
				<li className={style.country}>{country}</li>
				<li className={style.data}>{data}</li>
			</ul>
		</>
	);
}

export default CompanyItem;
