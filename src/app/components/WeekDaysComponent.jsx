"use client"

import { useState, useEffect } from 'react';

export default function WeekDaysComponent() {
	const [currentDate, setCurrentDate] = useState(new Date());

	// Обновляем дату каждую секунду
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		// Очищаем таймер при размонтировании компонента
		return () => clearInterval(timer);
	}, []);

	const currentDay = currentDate.getDay();
	const activeDayIndex = currentDay === 0 ? 6 : currentDay - 1;
	const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	return (
		<div className="week-day-container">
			<div className="data-container">
				<div className="data">{currentDate.toLocaleDateString()}</div>
				<div className="time">{currentDate.toLocaleTimeString()}</div>
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