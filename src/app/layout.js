"use client";
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import './dark-theme.css';
import { ProfileProvider } from './profile/ProfileContext';

export default function RootLayout({ children }) {
	return (
		<ThemeProvider>
			<html lang="ru">
				<body className='dark'>
					<Header />
					<ProfileProvider>
						{children}
					</ProfileProvider>
					<Footer />
				</body>
			</html>
		</ThemeProvider>
	);
}
