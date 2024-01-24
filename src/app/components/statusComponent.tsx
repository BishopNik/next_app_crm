/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './status.module.css';
import main from './main-status.module.css';

export enum Status {
	Active = 'active',
	NotActive = 'not_active',
	Pending = 'pending',
	Suspended = 'suspended',
}

export interface StatusComponentProps {
	type: Status;
	children: React.ReactNode;
	disabled?: boolean;
}

function StatusComponent({ type, disabled, children }: StatusComponentProps) {
	return (
		<div className={clsx(main.main_label, styles[type], disabled && main.disabled)}>
			<div className={main.boolet}></div>
			{children}
		</div>
	);
}

export default StatusComponent;
