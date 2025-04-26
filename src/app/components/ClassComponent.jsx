"use client";
import { useState, useEffect } from 'react';
import { useProfile } from '../profile/ProfileContext';
import { scheduleData, lessonTimes } from '../data';
import './classComponent.css';

export default function ClassComponent({ selectedDayIndex = new Date().getDay() }) {
	const { profile } = useProfile();

	// Защитные значения по умолчанию
	const faculty = profile?.faculty || 'ИСП';
	const course = profile?.course || 1;
	const group = profile?.group || '101';

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
		6: 'Воскресенье'
	};

	useEffect(() => {
		const todayIndex = new Date().getDay() - 1;
		const todayIndexAdjusted = todayIndex === -1 ? 6 : todayIndex;
		setIsToday(selectedDayIndex === todayIndexAdjusted);

		const now = new Date();
		setCurrentTime(now);
		checkActiveLesson(now);

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

		const activeTimeSlot = lessonTimes.find(lesson => {
			return currentTimeStr >= lesson.start && currentTimeStr < lesson.end;
		});

		setActiveLessonId(activeTimeSlot ? activeTimeSlot.id : null);
	};

	const getFacultySchedule = () => {
		try {
			// Безопасный доступ к данным с проверкой каждого уровня
			return scheduleData?.[faculty]?.[course]?.[group] || [];
		} catch (error) {
			console.error('Ошибка загрузки расписания:', error);
			return [];
		}
	};

	const selectedDayName = daysMap[selectedDayIndex] || 'Неизвестный день';
	const facultySchedule = getFacultySchedule();
	const daySchedule = facultySchedule?.find(day => day.weekDay === selectedDayName);

	// Если выбран выходной (суббота или воскресенье)
	if (selectedDayIndex >= 5) {
		return (
			<div className="classes">
				<div className="weekend-message">
					<div className="weekend-icon">🎉</div>
					<div>Сегодня выходной</div>
					<div className="weekend-sub">Можно отдохнуть</div>
				</div>
			</div>
		);
	}

	// Если расписание для группы не найдено
	if (!facultySchedule.length) {
		return (
			<div className="classes">
				<div className="no-schedule-message">
					<div className="error-icon">⚠️</div>
					<div>Расписание не найдено</div>
					<div className="schedule-details">{faculty} {course} {group !== '-' ? group : 'курс'}</div>
				</div>
			</div>
		);
	}

	// Если на выбранный день нет занятий
	if (!daySchedule) {
		return (
			<div className="classes">
				<div className="no-classes-message">
					<div className="info-icon">ℹ️</div>
					<div>На {selectedDayName} занятий нет</div>
				</div>
			</div>
		);
	}

	// Основной рендер расписания
	return (
		<div className="classes">
			<div className="schedule-header">
				<h3>{faculty} {course} курс {group} группа</h3>
				<div className="current-day">{selectedDayName}</div>
			</div>

			{daySchedule.classes.map((item) => {
				const lessonTime = lessonTimes.find(lt => lt.id === item.id);
				const isActive = isToday && item.id === activeLessonId;

				return (
					<div
						key={item.id}
						className={`class-item ${isActive ? 'active' : ''}`}
					>
						<div className="class-order">{item.id}</div>
						<div className="class-time">
							{lessonTime ? `${lessonTime.start} ${lessonTime.end}` : '--:-- - --:--'}
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