/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './status_promo.module.css';
import CheckmarkOkSVG from '../icon/checkmark_ok-icon';
import CheckmarkNotSVG from '../icon/checkmark_not-icon';

enum PromoStatusText {
	active = 'Active',
	not_active = 'Not active',
}

export interface PromoStatusComponentProps {
	type: keyof typeof PromoStatusText;
}

function PromoStatusComponent({ type }: PromoStatusComponentProps) {
	return (
		<div className={clsx(styles.main, styles[type])}>
			{type === 'active' ? <CheckmarkOkSVG /> : <CheckmarkNotSVG />}
			{type === 'active' ? 'Yes' : 'NO'}
		</div>
	);
}

export default PromoStatusComponent;
