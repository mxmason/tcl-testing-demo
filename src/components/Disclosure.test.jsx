/** @import { DisclosureProps } from './Disclosure' */
import { render } from '@testing-library/react';

import { Disclosure } from './Disclosure';

describe('Disclosure', () => {
	/** @type {DisclosureProps} */
	const DEFAULT_PROPS = {
		children: (
			<p>
				I&lsquo;m some content with <a href="https://example.com">a link</a>.
			</p>
		),
		label: 'Summary',
		open: false,
	};

	it('Renders a button with expected attributes and semantics', () => {
		// The `render` function creates a copy of our component that can be tested.
		render(<Disclosure {...DEFAULT_PROPS} />);
		/**
		 * TODO:
		 * 1. Verify that the Discosure renders a real <button> element
		 * 2. Verify that the button is a toggle button. Hint: aria!
		 * 3. Verify that the Disclosure is not open by default
		 * 
		 * To do any of the above, we'll need the `screen` module
		 * from `@testing-library/react`!
		 */
	});

	/**
	 * TODO:
	 * What else can we test? 
	 * What properties is this component expected to have?
	 * What should happen when a user clicks on the button? How do we test that?
	 */
});
