import { Disclosure } from '../components/Disclosure';
import './FAQ.css';

export function FAQ() {
	return (
		<>
			<header className="Header">
				<h1 className="BrandLogo">
					<a href="#">Website Corp</a>
				</h1>
				<nav className="Nav">
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#" aria-current="page">
						FAQ
					</a>
				</nav>
			</header>
			<main>
				<h1>FAQ</h1>
				<Disclosure label="What are frogs?" open>
					We just don&apos;t know.
				</Disclosure>
				<Disclosure label="Where can I learn more?">
					We have a handy-dandy <a href="#">help article</a> (spoilers: that
					link goes nowhere).
				</Disclosure>
			</main>
			<footer className="Footer">
				<p>
					Made with 💜 by{' '}
					<a href="https://github.com/the-collab-lab/tcl-74-smart-shopping-list">
						TCL 74
					</a>
					.
				</p>
			</footer>
		</>
	);
}
