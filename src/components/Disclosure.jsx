/**
 * @import { ReactNode } from 'react'
 */

/**
 * @typedef {Object} DisclosureProps
 * @property {ReactNode} children
 * @property {string} label
 * @property {boolean} [open=false]
 */

import { useState } from 'react';
import PlusIcon from '../assets/plus-icon.svg';
import './Disclosure.css';

/**  @param {DisclosureProps} props */
export function Disclosure({ children, label, open = false }) {
	const [isOpen, setIsOpen] = useState(open);

	// This variable allows us to only add a data-attribute to the final DOM
	// when the Disclosure is open. When it's closed, there will be no data-open
	// attribute on the element.
	const dataOpen = isOpen ? '' : null;

	function handleClick() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<div className="Disclosure" data-open={dataOpen}>
			<button className="Disclosure-summary" onClick={handleClick}>
				<img alt="" className="Disclosure-indicator" src={PlusIcon} />
				<span>{label}</span>
			</button>
			<div className="Disclosure-content">{children}</div>
		</div>
	);
}
