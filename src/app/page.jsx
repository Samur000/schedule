"use client";
import { useState, useEffect } from 'react';

import WeekDaysComponent from "./components/WeekDaysComponent";
import ClassComponent from "./components/ClassComponent";

export default function Home() {
	const [selectedDayIndex, setSelectedDayIndex] = useState(0);

	useEffect(() => {
		const currentDate = new Date();
		const currentDay = currentDate.getDay();
		const initialDayIndex = currentDay === 0 ? 6 : currentDay - 1;
		setSelectedDayIndex(initialDayIndex);
	}, []);

	const handleDaySelect = (index) => {
		setSelectedDayIndex(index);
	};
	return (
		<div className="container">
			{/* <h1>Здесь будет рассписание</h1> */}
			<WeekDaysComponent
				onDaySelect={handleDaySelect}
				activeDayIndex={selectedDayIndex}
			/>
			<ClassComponent selectedDayIndex={selectedDayIndex} />
		</div>
	);
}
