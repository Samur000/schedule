"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Profile() {
	const [profile] = useState({
		name: "Иванов Иван Иванович",
		avatar: "https://www.blast.hk/attachments/64804/",
		group: "-",
		course: 1,
		email: "ivanov@edu.ru",
		phone: "+7 (123) 456-78-90",
		username: "ivanov_ii",
		status: "Студент",
		direction: 'ИСП'
	});

	return (
		<div className="profile">

			<div className="container">
				<div className="profile-card">
					<div className="profile-avatar-container">
						<div className="avatar-border">
							<img
								src={profile.avatar}
								alt="Аватар"
								className="profile-avatar"
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='40' r='35' fill='%23" +
										(document.documentElement.classList.contains('dark') ? '059b71' : '007050') + "'/%3E%3C/svg%3E"
								}}
							/>
						</div>
						<div className="profile-badge">{profile.status}</div>
					</div>

					<h2 className="profile-name">{profile.name}</h2>
					<p className="profile-username">@{profile.username}</p>

					<Link className='settings-link' href='./profile/settings'>настройки</Link>
					<div className="profile-grid">
						<div className="grid-item">
							<span className="grid-label">Направление</span>
							<span className="grid-value">{profile.direction}</span>
						</div>
						<div className="grid-item">
							<span className="grid-label">Курс</span>
							<span className="grid-value">{profile.course}</span>
						</div>
						<div className="grid-item">
							<span className="grid-label">Группа</span>
							<span className="grid-value">{profile.group}</span>
						</div>
						<div className="grid-item">
							<span className="grid-label">Почта</span>
							<span className="grid-value">{profile.email}</span>
						</div>
						<div className="grid-item">
							<span className="grid-label">Телефон</span>
							<span className="grid-value">{profile.phone}</span>
						</div>
					</div>
				</div><br /><br /><br />
			</div>
		</div>
	);
}