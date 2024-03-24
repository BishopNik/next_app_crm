/** @format */

'use client';

import React from 'react';
import SidebarItem from '@/app/components/blocks/sidebar_item';
import styles from './sidebar.module.css';
import LogoSVG from '@/app/icon/logo-icon';
import ExitSVG from '@/app/icon/exit-icon';
import DashboardSVG from '@/app/icon/dashboard-icon';
import CompaniesSVG from '@/app/icon/companies-icon';
import { useRouter } from 'next/navigation';

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
	const router = useRouter();

	const handleExitClick = () => {
		router.push('/');
	};

	return (
		<aside className={styles.main}>
			<div className={styles.logo}>
				<LogoSVG />
			</div>

			<ul className={styles.menu}>
				<SidebarItem pathname={'/dashboard'} icon={<DashboardSVG />}>
					Dashboard
				</SidebarItem>
				<SidebarItem pathname={'/companies'} icon={<CompaniesSVG />}>
					Companies
				</SidebarItem>
			</ul>

			<div className={styles.exit_block} onClick={handleExitClick}>
				<ExitSVG />
				<span>Exit</span>
			</div>
		</aside>
	);
}

export default Sidebar;
