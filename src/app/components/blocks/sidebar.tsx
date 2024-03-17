/** @format */

import React from 'react';
import styles from './sidebar.module.css';
import LogoSVG from '../../icon/logo-icon';
import ExitSVG from '../../icon/exit-icon';
import DashboardSVG from '../../icon/dashboard-icon';
import CompaniesSVG from '../../icon/companies-icon';

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
					<a className={styles.menu_item_link} href='/dashboard'>
						<span>
							<DashboardSVG />
						</span>
						<span>Dashboard</span>
						<div
							className={link === 'Dashboard' ? styles.active : styles.not_active}
						></div>
					</a>
				</li>
				<li className={styles.menu_item}>
					<a className={styles.menu_item_link} href='/companies'>
						<span>
							<CompaniesSVG />
						</span>
						<span>Companies</span>
						<div
							className={link === 'Companies' ? styles.active : styles.not_active}
						></div>
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
