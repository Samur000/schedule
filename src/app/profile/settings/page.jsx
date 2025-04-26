"use client";
import { useContext } from 'react';
import { ThemeContext } from '../../components/ThemeContext'; // Создадим этот контекст
import '../style.css'

export default function Settings() {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

	return (
		<><br />
			<div className="profile-card set">
				<h3>Настройки</h3><br /><br />
				<div className="profile-grid">
					<div className="grid-item">
						<span className="grid-label">Тема</span>
						<div className="custom-select">
							<select
								value={isDarkTheme ? 'dark' : 'light'}
								onChange={toggleTheme}
							>
								<option value="light">Тёмная</option>
								<option value="dark">Светлая</option>
							</select>
							<span className="select-arrow">▼</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}