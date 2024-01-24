/** @format */

import StatusComponent, { Status } from '@/app/components/statusComponent';

export default function Home() {
	return (
		<main>
			<h1>Hello world</h1>
			<StatusComponent type={Status.Active}>Active</StatusComponent>
			<StatusComponent type={Status.NotActive} disabled={true}>
				Not active
			</StatusComponent>
			<StatusComponent type={Status.Pending} disabled={true}>
				Pending
			</StatusComponent>
			<StatusComponent type={Status.Suspended} disabled={true}>
				Suspended
			</StatusComponent>
		</main>
	);
}
