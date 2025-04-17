"use client"; // Важно добавить эту директиву для использования хуков

import { useState } from 'react'; // Добавляем импорт useState

export default function Profile() {
  const [profile] = useState({
    name: "Иванов Иван Иванович",
    avatar: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
    group: "ИТ-41",
    course: 4,
    email: "ivanov@edu.ru",
    phone: "+7 (123) 456-78-90",
    username: "ivanov_ii",
    status: "Студент"
  });

  return (
    <div className="container">
      <div className="profile">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={profile.avatar} alt="Аватар" />
          </div>
          <div className="profile-info">
            <h2>{profile.name}</h2>
            <div className="profile-status">{profile.status}</div>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-row">
            <span className="profile-label">Группа:</span>
            <span className="profile-value">{profile.group} ({profile.course} курс)</span>
          </div>
          <div className="profile-row">
            <span className="profile-label">Имя пользователя:</span>
            <span className="profile-value">@{profile.username}</span>
          </div>
          <div className="profile-row">
            <span className="profile-label">Почта:</span>
            <span className="profile-value">{profile.email}</span>
          </div>
          <div className="profile-row">
            <span className="profile-label">Телефон:</span>
            <span className="profile-value">{profile.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}