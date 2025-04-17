"use client"; // Добавьте эту директиву в начале файла

import { useState, useEffect } from 'react';

export default function WeekDaysComponent() {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const currentDay = currentDate.getDay();
	const activeDayIndex = currentDay === 0 ? 6 : currentDay - 1;
	const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	return (
		<div className="week-day-container">
			<div className="data-container">
				<div className="data">{currentDate.toLocaleDateString('ru-RU')}</div>
				<div className="time">{currentDate.toLocaleTimeString('ru-RU')}</div>
			</div>
			<div className="week-days">
				{days.map((day, index) => (
					<span
						key={index}
						className={`week-day ${index === activeDayIndex ? 'active' : ''}`}
					>
						{day}
					</span>
				))}
			</div>
		</div>
	);
}