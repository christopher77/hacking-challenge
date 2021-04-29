import React, { useEffect } from "react";
import HomeData from "../../components/HomeData/HomeData";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { useAddName } from "../../redux/action/action-hooks";

const Home = () => {
	const addName = useAddName();
	let name;

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
			const data = await res.json();
			console.log(data);

			// const cities = data.map((item) => item.address.city);
			// console.log(cities);

			name = data.username;
			console.log(name);
			addName(name);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="container">
			<Header />
			<div className="home__image" />
			<HomeData />
		</div>
	);
};

export default Home;
