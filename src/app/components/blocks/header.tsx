/** @format */

import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

function Header() {
	return (
		<header className={styles.main}>
			{/* <h1 className={styles.page}>{page}</h1> */}
			<div className={styles.user}>
				<Image
					className={styles.logo}
					src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=826&t=st=1706539724~exp=1706540324~hmac=f95b6ac5ac65aa651613a5392b7975feed30a4d84da7249332061aeb86b1102b'
					alt='Company logo'
					width={80}
					height={80}
				/>
				<div className={styles.user_data}>
					<p className={styles.user_name}>Adam Smith</p>
					<p className={styles.user_email}>adamsmith@gmail.com</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
