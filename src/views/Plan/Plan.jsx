import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import "./Plan.scss";
import back from "../../images/icon_Back.png";
import shield from "../../images/shield.svg";
import check from "../../images/ic_check.png";
const Plan = () => {
	return (
		<div className="plan__container">
			<Aside />
			<Header />
			<div className="plan">
				<div className="plan__back">
					<img src={back} alt="back" className="auto__back-image" />
					<span>volver</span>
				</div>
				<div className="plan__title">
					<div className="plan__title-main">Mira las coberturas</div>
					<span>Conoce las coberturas para su plan</span>
				</div>
				<div className="details">
					<div className="details__placa">placa C2U-114</div>
					<div className="details__model">Wolkswagen 2019 Golf</div>
					<a href="#" className="details__link">
						editar
					</a>
					<div className="details__image"></div>
				</div>
				<div className="plan__coverage">
					<div>Agrega o quita coberturas</div>
				</div>
			</div>
			<div className="right">
				<div className="right__price">
					<div>
						<div className="right__price-value">$35.00</div>
						<span>mensuales</span>
					</div>
					<img src={shield} alt="shield" />
				</div>
				<hr />
				<div className="right__list">
					el precio incluye:
					<ul className="right__list--title">
						<li className="right__list--item">
							<img src={check} alt="check" className="right__list--item-icon" />{" "}
							Llanta de repuesto
						</li>
						<li className="right__list--item">
							<img src={check} alt="check" className="right__list--item-icon" />{" "}
							analisis de motor
						</li>
						<li className="right__list--item">
							<img src={check} alt="check" className="right__list--item-icon" />{" "}
							Aros gratis
						</li>
					</ul>
				</div>
				<button className="right__button">lo quiero</button>
			</div>
		</div>
	);
};

export default Plan;
