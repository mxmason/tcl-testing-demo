/** @import { DisclosureProps } from './Disclosure' */
import { render, screen } from '@testing-library/react';

import { Disclosure } from './Disclosure';

describe('Disclosure', () => {
	/** @type {DisclosureProps} */
	const DEFAULT_PROPS = {
		children: "I'm some content",
		label: 'Summary',
		open: false,
	};

	it('Renders a button with expected attributes and semantics', () => {
		// The `render` function creates a copy of our component that can be tested.
		render(<Disclosure {...DEFAULT_PROPS} />);

		// no given, when disclosuer componen renders, expect button to appear on screen
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(DEFAULT_PROPS.label);

		const disclosureElement = screen.getByText(DEFAULT_PROPS.children);
		expect(disclosureElement).not.toBeVisible();

		/**
		 Framework 1: given > when > then
		 Framework 2: arrange > act > assert
		 * TODO:
		 * 2. Verify that the button is a toggle button. Hint: aria!
		 * 3. Verify that the Disclosure is not open by default
		 *
		 * To do any of the above, we'll need the `screen` module
		 * from `@testing-library/react`!
		 */
	});

	// it appends text to the screen when the button is clicked

	// if text is already displayed, clicking button should hide the text

	/**
	 * TODO:
	 * What else can we test?
	 * What properties is this component expected to have?
	 * What should happen when a user clicks on the button? How do we test that?
	 */
});
