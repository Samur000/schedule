"use client";
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import './dark-theme.css';

export default function RootLayout({ children }) {
    return (
        <ThemeProvider>
            <html lang="ru">
                <body class="dark">
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </ThemeProvider>
    );
}
