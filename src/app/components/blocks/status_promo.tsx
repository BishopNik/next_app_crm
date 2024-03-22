/** @format */

import React from 'react';
import clsx from 'clsx';
import styles from './status_promo.module.css';
import CheckmarkOkSVG from '../../icon/checkmark_ok-icon';
import CheckmarkNotSVG from '../../icon/checkmark_not-icon';

export interface PromoStatusComponentProps {
	type: boolean;
}

function PromoStatusComponent({ type }: PromoStatusComponentProps) {
	return (
		<div className={clsx(styles.main, styles[type ? 'active' : 'not_active'])}>
			{type ? <CheckmarkOkSVG /> : <CheckmarkNotSVG />}
			{type ? 'Yes' : 'NO'}
		</div>
	);
}

export default PromoStatusComponent;
