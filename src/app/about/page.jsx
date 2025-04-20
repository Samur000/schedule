"use client"
import React, { useState } from 'react';

const About = () => {
	const [expandedCard, setExpandedCard] = useState(null);
	const sortOrder = 'asc'

	const teachers = [
		{
			id: 1,
			name: "Самур Гулиевич",
			position: "Преподаватель",
			subjects: ["Веб-разработка"],
			room: "2.5",
			email: "samur@edu.ru",
			phone: "+7 (123) 456-78-91",
			avatar: "https://shapka-youtube.ru/wp-content/uploads/2022/03/lev-na-avatarku.jpg"
		},
		{
			id: 2,
			name: "Ибрагим Икрамович",
			position: "Преподаватель",
			subjects: ["Кибербезопасность"],
			room: "3.5",
			email: "ibragim@edu.ru",
			phone: "+7 (123) 456-78-92",
			avatar: "https://shapka-youtube.ru/wp-content/uploads/2022/03/lev-na-avatarku.jpg"
		},
		{
			id: 3,
			name: "Абдурахман Гусейнович",
			position: "Преподаватель",
			subjects: ["Дизайн среды"],
			room: "3.6",
			email: "abdurahman@edu.ru",
			phone: "+7 (123) 456-78-93",
			avatar: "https://shapka-youtube.ru/wp-content/uploads/2022/03/lev-na-avatarku.jpg"
		},
		{
			id: 4,
			name: "Омар Алиевич",
			position: "Преподаватель",
			subjects: ["Чертеж"],
			room: "4.1",
			email: "omar@edu.ru",
			phone: "+7 (123) 456-78-94",
			avatar: "https://shapka-youtube.ru/wp-content/uploads/2022/03/lev-na-avatarku.jpg"
		},
	];

	// Сортируем преподавателей
	const sortedTeachers = [...teachers].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a.name.localeCompare(b.name);
		} else {
			return b.name.localeCompare(a.name);
		}
	});

	const toggleCard = (id) => {
		setExpandedCard(expandedCard === id ? null : id);
	};

	return (
		<div className="container">
			<div className="page-header">
				<h4 className="page-title">Преподавательский состав</h4>
			</div>

			<div className="teachers-grid">
				{sortedTeachers.map((teacher) => (
					<div
						key={teacher.id}
						className={`teacher-card ${expandedCard === teacher.id ? 'expanded' : ''}`}
						onClick={() => toggleCard(teacher.id)}
					>
						<div className="teacher-card-header">
							<div className="teacher-avatar">
								<img src={teacher.avatar} alt={teacher.name} />
							</div>
							<div className="teacher-basic-info">
								<h3 className="teacher-name">{teacher.name}</h3>
								<p className="teacher-position">{teacher.position}</p>
							</div>
						</div>

						{expandedCard === teacher.id && (
							<div className="teacher-card-body">
								<div className="teacher-info-row">
									<span className="info-label">Дисциплины:</span>
									<span className="info-value">{teacher.subjects.join(", ")}</span>
								</div>
								<div className="teacher-info-row">
									<span className="info-label">Кабинет:</span>
									<span className="info-value">{teacher.room}</span>
								</div>
								<div className="teacher-info-row">
									<span className="info-label">Email:</span>
									<span className="info-value">
										<a href={`mailto:${teacher.email}`}>{teacher.email}</a>
									</span>
								</div>
								<div className="teacher-info-row">
									<span className="info-label">Телефон:</span>
									<span className="info-value">
										<a href={`tel:${teacher.phone}`}>{teacher.phone}</a>
									</span>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default About;