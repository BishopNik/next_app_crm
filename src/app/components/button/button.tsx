/** @format */

import React from 'react';
import buttonCSS from '@/app/components/button/button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
}

function Button({ children, ...rest }: ButtonProps) {
	return (
		<button {...rest} className={buttonCSS.main_button}>
			{children}
		</button>
	);
}

export default Button;
