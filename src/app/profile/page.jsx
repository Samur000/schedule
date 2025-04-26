"use client";
import { useState, useEffect, useRef } from 'react';
import { useProfile } from './ProfileContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './style.css';

export default function ProfilePage() {
	const { profile, updateProfile } = useProfile();
	const router = useRouter();
	const [editMode, setEditMode] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		faculty: 'ИСП',
		course: 1,
		group: '101',
		email: '',
		phone: '',
		avatar: ''
	});
	const [fileError, setFileError] = useState('');
	const fileInputRef = useRef(null);

	// Инициализация формы данными профиля
	useEffect(() => {
		if (profile) {
			setFormData({
				name: profile.name || '',
				faculty: profile.faculty || 'ИСП',
				course: profile.course || 1,
				group: profile.group || '101',
				email: profile.email || '',
				phone: profile.phone || '',
				avatar: profile.avatar || ''
			});
		}
	}, [profile]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: name === 'course' ? parseInt(value) || 1 : value
		}));
	};

	const handleAvatarChange = (e) => {
		const file = e.target.files[0];
		setFileError('');

		if (!file) return;

		// Проверка типа файла
		if (!file.type.match('image.*')) {
			setFileError('Пожалуйста, выберите файл изображения');
			return;
		}

		// Проверка размера файла (не более 2MB)
		if (file.size > 3	 * 1024 * 1024) {
			setFileError('Максимальный размер файла - 2MB');
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			setFormData(prev => ({
				...prev,
				avatar: reader.result
			}));
		};
		reader.onerror = () => {
			setFileError('Ошибка при чтении файла');
		};
		reader.readAsDataURL(file);
	};

	const triggerFileInput = () => {
		fileInputRef.current.value = ''; // Сброс значения для повторной загрузки того же файла
		fileInputRef.current.click();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (fileError) return;

		updateProfile({
			...profile,
			...formData,
			status: 'Студент',
			direction: formData.faculty
		});
		setEditMode(false);
		router.push('/profile');
	};

	if (!profile) {
		return (
			<div className="profile-loading">
				<div className="spinner"></div>
				<p>Загрузка профиля...</p>
			</div>
		);
	}

	return (
		<div className="profile-page">
			<div className="profile-header">
				<h1>Профиль</h1>
				<Link className='settings-link' href='./profile/settings'>
					Настройки
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</g>
					</svg>
				</Link>
			</div>

			{editMode ? (
				<form className="profile-form" onSubmit={handleSubmit}>
					<div className="form-group avatar-upload">
						<label>Аватарка</label>
						<div className="avatar-preview-container">
							<img
								src={formData.avatar || "/default-avatar.jpg"}
								alt="Предпросмотр аватарки"
								className="avatar-preview"
							/>
							<button
								type="button"
								className="upload-btn"
								onClick={triggerFileInput}
							>
								Выбрать файл
							</button>
							<input
								type="file"
								ref={fileInputRef}
								onChange={handleAvatarChange}
								accept="image/jpeg, image/png, image/webp"
								style={{ display: 'none' }}
							/>
							{fileError && <div className="file-error">{fileError}</div>}
							<div className="file-hint">Макс. размер: 2MB (JPEG, PNG, WebP)</div>
						</div>
					</div>

					<div className="form-group">
						<label>ФИО</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Факультет</label>
						<select
							name="faculty"
							value={formData.faculty}
							onChange={handleInputChange}
							required
						>
							<option value="ИСП">ИСП (Информационные системы и программирование)</option>
							<option value="ДО">ДО (Дизайн Одежды)</option>
							<option value="ДС">Дизайн Среды</option>
							<option value="ГД">ГД (Графический дизайн)</option>
							<option value="АРХ">АРХ (Архитекторы)</option>
						</select>
					</div>

					<div className="form-group">
						<label>Курс</label>
						<select
							name="course"
							value={formData.course}
							onChange={handleInputChange}
							required
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div className="form-group">
						<label>Группа</label>
						<select
							name="group"
							value={formData.group}
							onChange={handleInputChange}
							required
						>
							<option value="-">нет</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="form-group">
						<label>Телефон</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="form-actions">
						<button type="button" className="cancel-btn" onClick={() => setEditMode(false)}>
							Отмена
						</button>
						<button type="submit" className="save-btn" disabled={!!fileError}>
							Сохранить
						</button>
					</div>
				</form>
			) : (
				<div className="profile-card">
					<div className="profile-avatar-container">
						<div className="avatar-border">
							<img
								src={profile.avatar || "/default-avatar.jpg"}
								alt="Аватар"
								className="profile-avatar"
							/>
						</div>
						<div className="profile-badge">{profile.status}</div>
					</div>

					<h2 className="profile-name">{profile.name}</h2>

					<div className="profile-grid">
						<div className="grid-item">
							<span className="grid-label">Факультет</span>
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
							<span className="grid-label">Email</span>
							<span className="grid-value">{profile.email}</span>
						</div>
						<div className="grid-item">
							<span className="grid-label">Телефон</span>
							<span className="grid-value">{profile.phone}</span>
						</div>
					</div>

					<button className="edit-btn" onClick={() => setEditMode(true)}>
						Редактировать профиль
					</button>
				</div>
			)}
			<br /><br /><br />
		</div>
	);
}