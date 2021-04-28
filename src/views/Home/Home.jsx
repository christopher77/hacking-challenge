import React from "react";
import HomeData from "../../components/HomeData/HomeData";
import "./Home.scss";
import Header from "../../components/Header/Header";

const Home = () => {
	return (
		<div className="container">
			<Header />
			<div className="home__image" />
			<HomeData />
		</div>
	);
};

export default Home;
