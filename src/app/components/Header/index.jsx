export default function Header({ toggleTheme, isDarkTheme }) {
	return (
		<>
			<header>
				<div className="container">
					<div className="logo">Техникум Дизайна</div>

					<svg className="header-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs></defs><path className="cls-1" d="M356.69,202.71l-48.38-28.39V348.08l48.38-27.87Zm42.76-23L265.54,101.13v320.1l133.91-77.15Zm-90.84-71.13L256.29,75.36l-161,93.06V358.28L139.81,384v46.14l-87-50.31V144.63L255.86,27.22l52.75,30.5ZM256,449.23,201.47,417V176.56l44.13-25.12V103.86L112.5,179.24V227l46.11-26.56V440.62l97.9,56.6L459.2,380V143.51L327.5,67.36v48.57l91.19,52.13V355.51Z" /></svg>
				</div>
			</header>
		</>
	);
}
