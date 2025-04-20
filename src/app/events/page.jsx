"use client";
import { useState } from 'react';

export default function Events() {
	const [events] = useState([
		{
			id: 1,
			title: "День открытых дверей",
			date: "15 сентября 2023",
			time: "10:00 - 14:00",
			location: "Актовый зал",
			shortDesc: "Знакомство с факультетами и специальностями",
			fullDesc: "Приглашаем всех желающих на ежегодный День открытых дверей. В программе: экскурсии по кампусу, встречи с преподавателями, презентации образовательных программ и консультации по поступлению.",
			image: "https://festivalnauki.ru/upload/iblock/acd/e8mmoyqsibb0ztarn6gnkhkjcg1em5x4/20220327_dod.jpg"
		},
		{
			id: 2,
			title: "Хакатон по веб-разработке",
			date: "5-7 октября 2023",
			time: "09:00 - 18:00",
			location: "Компьютерный класс 3.5",
			shortDesc: "Соревнования по созданию веб-приложений",
			fullDesc: "48-часовой марафон по разработке веб-приложений. Участники будут работать в командах над реальными кейсами от наших партнеров. Призы для победителей и возможность стажировки.",
			image: "https://emc21.ru/wp-content/uploads/2020/04/hakaton.jpg"
		},
		{
			id: 3,
			title: "Научная конференция",
			date: "20 ноября 2023",
			time: "11:00 - 16:00",
			location: "Конференц-зал",
			shortDesc: "Презентация студенческих исследований",
			fullDesc: "Ежегодная конференция, где студенты представляют свои научные работы. Будут работать секции по техническим, гуманитарным и естественным наукам. Приглашенные эксперты из ведущих компаний.",
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Opening_Ceremony_IAU2006GA.jpg/1200px-Opening_Ceremony_IAU2006GA.jpg"
		}
	]);

	const [selectedEvent, setSelectedEvent] = useState(null);

	const openModal = (event) => {
		setSelectedEvent(event);
	};

	const closeModal = () => {
		setSelectedEvent(null);
	};

	return (
		<div className="events-page">
			<div className="container">
				<h2 className="page-title">Мероприятия</h2>

				<div className="events-grid">
					{events.map(event => (
						<div key={event.id} className="event-card" onClick={() => openModal(event)}>
							<div className="event-image">
								<img src={event.image} alt={event.title} />
							</div>
							<div className="event-content">
								<h3 className="event-title">{event.title}</h3>
								<div className="event-meta">
									<span className="event-date">{event.date}</span>
									<span className="event-time">{event.time}</span>
								</div>
								<p className="event-location">{event.location}</p>
								<p className="event-short-desc">{event.shortDesc}</p>
							</div>
						</div>
					))}
				</div>

				{selectedEvent && (
					<div className="event-modal">
						<div className="modal-overlay" onClick={closeModal}></div>
						<div className="modal-content">
							<button className="close-modal" onClick={closeModal}>
								&times;
							</button>
							<div className="modal-image">
								<img src={selectedEvent.image} alt={selectedEvent.title} />
							</div>
							<div className="modal-body">
								<h3>{selectedEvent.title}</h3>
								<div className="modal-meta">
									<p><strong>Дата:</strong> {selectedEvent.date}</p>
									<p><strong>Время:</strong> {selectedEvent.time}</p>
									<p><strong>Место:</strong> {selectedEvent.location}</p>
								</div>
								<div className="modal-desc">
									<p>{selectedEvent.fullDesc}</p>
								</div>
								<button className="register-btn">Зарегистрироваться</button>
							</div>
						</div>
					</div>
				)}
			</div>

			<style jsx>{`
        
       
      `}</style>
		</div>
	);
}