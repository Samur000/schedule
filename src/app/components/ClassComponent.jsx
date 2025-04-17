"use client";

import { useState } from 'react';

export default function ClassComponent() {
	// Пример данных расписания
	const initialScheduleItems = [
		{
			id: 1,
			order: 1,
			subject: 'Веб разработка',
			teacher: 'Самур Гулиевич',
			room: '2.5',
			isActive: false
		},
		{
			id: 2,
			order: 2,
			subject: 'Кибер Безопасность',
			teacher: 'Ибрагим Икрамович',
			room: '3.5',
			isActive: true
		},
		{
			id: 3,
			order: 3,
			subject: 'История',
			teacher: 'Джамиля Газбулаевна',
			room: '2.4',
			isActive: false
		}
	];

	const [classes, setClasses] = useState(initialScheduleItems);

	return (
		<div className="classes">
			{classes.map((item) => (
				<div
					key={item.id}
					className={`class-item ${item.isActive ? 'active' : ''}`}
				>
					<div className="class-order">{item.order}</div>
					<div className="class-info">
						<h3 className="class-subject">{item.subject}</h3>
						<div className="class-details">
							<span className="class-teacher">{item.teacher}</span>
						</div>
					</div>
					<span className="class-room">{item.room}</span>
				</div>
			))}
		</div>
	);
}