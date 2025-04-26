"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		// Загрузка профиля из localStorage при инициализации
		const savedProfile = localStorage.getItem('userProfile');
		if (savedProfile) {
			setProfile(JSON.parse(savedProfile));
		} else {
			// Установка значений по умолчанию
			setProfile({
				name: "Иванов Иван Иванович",
				avatar: "",
				group: "-",
				course: 1,
				email: "ivanov@edu.ru",
				phone: "+7 (123) 456-78-90",
				username: "ivanov_ii",
				status: "Студент",
				faculty: 'ИСП'
			});
		}
	}, []);

	const updateProfile = (newProfile) => {
		setProfile(newProfile);
		localStorage.setItem('userProfile', JSON.stringify(newProfile));
	};

	return (
		<ProfileContext.Provider value={{ profile, updateProfile }}>
			{children}
		</ProfileContext.Provider>
	);
}

export function useProfile() {
	const context = useContext(ProfileContext);
	if (!context) {
		throw new Error('useProfile must be used within a ProfileProvider');
	}
	return context;
}