"use client";
import { useState, useEffect } from 'react';
import { scheduleData, lessonTimes } from './data';

export default function ClassComponent({ selectedDayIndex }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeLessonId, setActiveLessonId] = useState(null);
    const [isToday, setIsToday] = useState(false);

    const daysMap = {
        0: 'Понедельник',
        1: 'Вторник',
        2: 'Среда',
        3: 'Четверг',
        4: 'Пятница',
        5: 'Суббота',
        6: 'Воскресеньe'
    };

    useEffect(() => {
        // Проверяем, является ли выбранный день сегодняшним
        const todayIndex = new Date().getDay() - 1;
        const todayIndexAdjusted = todayIndex === -1 ? 6 : todayIndex; // Для воскресенья
        setIsToday(selectedDayIndex === todayIndexAdjusted);

        // Первоначальная проверка
        const now = new Date();
        setCurrentTime(now);
        checkActiveLesson(now);

        // Устанавливаем интервал для обновления каждую минуту
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            checkActiveLesson(now);
        }, 60000);

        return () => clearInterval(timer);
    }, [selectedDayIndex]);

    const checkActiveLesson = (now) => {
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const currentTimeStr = `${hours}:${minutes}`;

        // Находим активный временной промежуток
        const activeTimeSlot = lessonTimes.find(lesson => {
            return currentTimeStr >= lesson.start && currentTimeStr < lesson.end;
        });

        setActiveLessonId(activeTimeSlot ? activeTimeSlot.id : null);
    };

    const selectedDayName = daysMap[selectedDayIndex];
    const daySchedule = scheduleData.find(day => day.weekDay === selectedDayName);

    if (selectedDayIndex >= 5) {
        return (
            <div className="classes">
                <div className="weekend-message">Сегодня выходной</div>
            </div>
        );
    }

    if (!daySchedule) {
        return (
            <div className="classes">
                <div className="no-schedule-message">Расписание не найдено</div>
            </div>
        );
    }

    return (
        <div className="classes">
            {daySchedule.classes.map((item) => {
                const lessonTime = lessonTimes.find(lt => lt.id === item.id);
                // Урок активен только если это сегодня И номер урока совпадает с активным
                const isActive = isToday && item.id === activeLessonId;

                return (
                    <div
                        key={item.id}
                        className={`class-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="class-order">{item.id}</div>
                        <div className="class-time">
                            {lessonTime ? `${lessonTime.start} - ${lessonTime.end}` : '--:-- - --:--'}
                        </div>
                        <div className="class-info">
                            <h3 className="class-subject">{item.title}</h3>
                            <div className="class-details">
                                <span className="class-teacher">{item.teacher}</span>
                            </div>
                        </div>
                        <span className="class-room">{item.classRoom}</span>
                    </div>
                );
            })}
        </div>
    );
}