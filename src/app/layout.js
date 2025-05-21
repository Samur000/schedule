"use client";
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import './dark-theme.css';
import { ProfileProvider } from './profile/ProfileContext';
import Head from 'next/head'; // Или используйте встроенный экспорт metadata в Next.js 13+

export default function RootLayout({ children }) {
	return (
		<ThemeProvider>
			<html lang="ru">
				<Head>
					{/* Основные SEO-теги */}
					<title>Онлайн расписание | Техникум дизайна</title>
					<meta name="description" content="Актуальное расписание занятий и мероприятий для студентов Техникума дизайна. 
					Личный кабинет, мобильная версия, уведомления об изменениях в расписании." />
					<meta name="keywords" content="расписание занятий, учебное расписание, техникум [город], электронное расписание, 
					расписание пар, студенческий портал, мероприятия для студентов, список преподавателей" />

					{/* OpenGraph / Социальные сети */}
					<meta property="og:title" content="Онлайн расписание | Техникум дизайна" />
					<meta property="og:description" content="Ваш персональный помощник в учебном процессе - всегда актуальное расписание" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://samur000.github.io/schedule/" />
					<meta property="og:image" content="https://cdn-icons-png.flaticon.com/512/17838/17838545.png" />

					{/* Favicon */}
					<link rel="icon" href="https://cdn-icons-png.flaticon.com/512/17838/17838545.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="https://cdn-icons-png.flaticon.com/512/17838/17838545.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="https://cdn-icons-png.flaticon.com/512/17838/17838545.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="https://cdn-icons-png.flaticon.com/512/17838/17838545.png" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
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
