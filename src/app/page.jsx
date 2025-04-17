import Link from "next/link";
import WeekDaysComponent from "./components/WeekDaysComponent";

export default function Home() {
	return (
		<div className="container">
		{/* <h1>Здесь будет рассписание</h1> */}
		<WeekDaysComponent/>
		</div>
	);
}
