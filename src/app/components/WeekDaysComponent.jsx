export default function WeekDaysComponent() {
	const currentDay = new Date().getDay();
	const activeDayIndex = currentDay === 0 ? 6 : currentDay - 1;
	const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	const myData = new Date()
	return (
		<div className="week-day-container">
			<div className="data-container">
				<div className="data">{myData.toLocaleDateString()}</div>
				<div className="time">{myData.getHours() === 0 ? `0${myData.getHours()}` : myData.getHours()}:{myData.getMinutes()}</div>
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