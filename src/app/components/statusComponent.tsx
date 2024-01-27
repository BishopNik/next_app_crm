/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './status.module.css';
import main from './main-status.module.css';

enum StatusText {
	active = 'Active',
	not_active = 'Not active',
	pending = 'Pending',
	suspended = 'Suspended',
}

export interface StatusComponentProps {
	type: keyof typeof StatusText;
	disabled?: boolean;
}

function StatusComponent({ type, disabled }: StatusComponentProps) {
	return (
		<div className={clsx(main.main_label, styles[type], disabled && main.disabled)}>
			<span className={main.boolet}></span>
			{StatusText[type]}
		</div>
	);
}

export default StatusComponent;
