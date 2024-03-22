/** @format */

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './sidebar.module.css';

interface SidebarItemProps {
	pathname: string;
	icon: React.ReactNode;
	children: React.ReactNode;
}

function SidebarItem({ pathname, icon, children }: SidebarItemProps) {
	const page = usePathname();

	return (
		<li className={styles.menu_item}>
			<Link
				className={clsx(styles.menu_item_link, page === pathname && styles.current)}
				href={pathname || '/'}
			>
				{icon}
				<span>{children}</span>
			</Link>
		</li>
	);
}

export default SidebarItem;
