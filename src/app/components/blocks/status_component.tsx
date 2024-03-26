/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './status.module.css';
import main from './main-status.module.css';
import { StatusText } from '@/lib/api';

export interface StatusComponentProps {
	type: string;
	disabled?: boolean;
}

function StatusComponent({ type, disabled }: StatusComponentProps) {
	return (
		<div className={clsx(main.main_label, styles[type], disabled && main.disabled)}>
			<span className={main.boolet}></span>
			<span className={main.button_text}>{StatusText[type as keyof typeof StatusText]}</span>
		</div>
	);
}

export default StatusComponent;
