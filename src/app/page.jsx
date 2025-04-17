import Link from "next/link";
import WeekDaysComponent from "./components/WeekDaysComponent";
import ClassComponent from "./components/ClassComponent";

export default function Home() {
	return (
		<div className="container">
		{/* <h1>Здесь будет рассписание</h1> */}
		<WeekDaysComponent/>
		<ClassComponent/>
		</div>
	);
}
