/** @format */

import React from 'react';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={font.className} style={{ display: 'flex', justifyContent: 'center' }}>
				{children}
			</body>
		</html>
	);
}
