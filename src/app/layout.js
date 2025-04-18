"use client";

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import './dark-theme.css';

export default function RootLayout({ children }) {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setIsDarkTheme(savedTheme === 'dark');
			document.body.classList.toggle('dark', savedTheme === 'dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDarkTheme;
		setIsDarkTheme(newTheme);
		localStorage.setItem('theme', newTheme ? 'dark' : 'light');
		document.body.classList.toggle('dark', newTheme);
	};

	return (
		<html lang="ru" className={isDarkTheme ? 'dark' : ''}>
			<body>
				<Header toggleTheme={toggleTheme} isDarkTheme={!isDarkTheme} />
				{children}
				<Footer />
			</body>
		</html>
	);
}