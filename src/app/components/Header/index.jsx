export default function Header({ toggleTheme, isDarkTheme }) {
	return (
		<>
			<header>
				<div className="container">
					<div className="logo">My Schedule</div>
					<button
						onClick={toggleTheme}
						className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}
						aria-label="Toggle theme"
					>
						<span className="toggle-track">
							<span className="toggle-thumb" />
						</span>
						<span className="toggle-icons">
							<span className="sun-icon">🌞</span>
							<span className="moon-icon">🌙</span>
						</span>
					</button>
				</div>
			</header>
		</>
	);
}
