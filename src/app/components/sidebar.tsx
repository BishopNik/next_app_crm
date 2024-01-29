/** @format */

import React from 'react';
import styles from './sidebar.module.css';
import LogoSVG from '../icon/logo-icon';
import ExitSVG from '../icon/exit-icon';
import DashboardSVG from '../icon/dashboard-icon';
import CompaniesSVG from '../icon/companies-icon';

interface SidebarProps {
	link: string;
}

function Sidebar({ link }: SidebarProps) {
	return (
		<div className={styles.main}>
			<div className={styles.logo}>
				<LogoSVG />
			</div>
			<ul className={styles.menu}>
				<li className={styles.menu_item}>
					<a className={styles.menu_item_link} href=''>
						<span>
							<DashboardSVG />
						</span>
						<span>Dashboard</span>
						{link === 'Dashboard' && <div className={styles.active}></div>}
					</a>
				</li>
				<li className={styles.menu_item}>
					<a className={styles.menu_item_link} href=''>
						<span>
							<CompaniesSVG />
						</span>
						<span>Companies</span>
						{link === 'Companies' && <div className={styles.active}></div>}
					</a>
				</li>
			</ul>
			<div className={styles.exit_block}>
				<span>
					<ExitSVG />
				</span>
				<span>Exit</span>
			</div>
		</div>
	);
}

export default Sidebar;
