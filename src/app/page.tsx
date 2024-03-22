/** @format */

import Link from 'next/link';

export default async function Home() {
	return (
		<main
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '15px',
				marginTop: '40px',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<h1 style={{ fontSize: '30px' }}>Home page</h1>
			<Link href='/dashboard' style={{ color: 'blue' }}>
				Dashboard
			</Link>
		</main>
	);
}
