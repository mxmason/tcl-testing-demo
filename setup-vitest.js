import { configure as domConf } from '@testing-library/dom';
import { configure as reactConf } from '@testing-library/react';
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

const CONFIG = {
	getElementError: (message) => {
		const error = new Error(message ?? undefined);
		error.name = 'TestingLibraryElementError';
		error.stack = null;
		return error;
	},
};

domConf(CONFIG);
reactConf(CONFIG);
