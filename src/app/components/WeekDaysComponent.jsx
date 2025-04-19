"use client";
import { useState, useEffect } from 'react';

export default function WeekDaysComponent({ onDaySelect, activeDayIndex }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    return (
        <div className="week-container">
            <div className="date-time-card">
                <div className="current-date">
                    {currentDate.toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </div>
                <div className="current-time">
                    {currentDate.toLocaleTimeString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })}
                </div>
            </div>

            <div className="week-days-grid">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`day-card ${index === activeDayIndex ? 'active' : ''}`}
                        onClick={() => onDaySelect(index)}
                    >
                        <div className="day-name">{day}</div>
                        {index === activeDayIndex && (
                            <div className="active-indicator"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}