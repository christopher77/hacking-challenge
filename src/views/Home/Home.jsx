import React, { useEffect } from "react";
import HomeData from "../../components/HomeData/HomeData";
import "./Home.scss";
import Header from "../../components/Header/Header";

const Home = () => {
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
			console.log(data);
			const arrayNames = data.map((item) => item.phone);
			console.log(arrayNames);
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
