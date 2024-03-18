/** @format */

import React from 'react';
import styles from './sidebar.module.css';
import LogoSVG from '@/app/icon/logo-icon';
import ExitSVG from '@/app/icon/exit-icon';
import DashboardSVG from '@/app/icon/dashboard-icon';
import CompaniesSVG from '@/app/icon/companies-icon';

function Sidebar() {
	const link = 'Dashboard';
	return (
		<aside className={styles.main}>
			<div className={styles.logo}>
				<LogoSVG />
			</div>

			<ul className={styles.menu}>
				<li className={styles.menu_item}>
					<a className={styles.menu_item_link} href='/dashboard'>
						<span>
							<DashboardSVG />
						</span>
						<span>Dashboard</span>
						<span
							className={link === 'Dashboard' ? styles.active : styles.not_active}
						></span>
					</a>
				</li>
				<li className={styles.menu_item}>
					<a className={styles.menu_item_link} href='/companies'>
						<span>
							<CompaniesSVG />
						</span>
						<span>Companies</span>
						<span
							className={link === 'Companies' ? styles.active : styles.not_active}
						></span>
					</a>
				</li>
			</ul>

			<div className={styles.exit_block}>
				<span>
					<ExitSVG />
				</span>
				<span>Exit</span>
			</div>
		</aside>
	);
}

export default Sidebar;
