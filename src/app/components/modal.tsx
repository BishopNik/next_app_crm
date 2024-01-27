/** @format */

'use client';

import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styles from './company-form.module.css';
import CloseSVG from '../icon/close-icon';

export interface ModalProps {
	show: boolean;
	children?: ReactNode;
	onClose: () => void;
}

function Modal({ show, children, onClose }: ModalProps) {
	return (
		<Transition show={show} as={Fragment}>
			<Dialog as='div' className='fixed inset-0 z-50 flex items-center' onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>
				<Dialog.Panel
					className='relative transform overflow-hidden rounded-lg shadow-xl transition-all p-7 mx-auto'
					style={{ backgroundColor: '#f3f4f6' }}
				>
					{children}
					<div className={styles.button_close} onClick={onClose}>
						<CloseSVG />
					</div>
				</Dialog.Panel>
			</Dialog>
		</Transition>
	);
}

export default Modal;
