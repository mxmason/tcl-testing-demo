import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FAQ } from './pages';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<FAQ />
	</StrictMode>,
);
