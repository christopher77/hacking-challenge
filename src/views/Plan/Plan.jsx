import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import "./Plan.scss";
import back from "../../images/icon_Back.png";
import shield from "../../images/shield.svg";
import check from "../../images/ic_check.png";
import {
	useLicensePlate,
	useBrand,
	useYearCar,
} from "../../redux/selectors/selectors";
import { navigate } from "@reach/router";
import robo from "../../images/icon_theft.svg";
import choque from "../../images/icon_damage.png";
import perdida from "../../images/icon_perdidatotal.svg";
import chevron from "../../images/chevrot.png";

const Plan = () => {
	const licensePlate = useLicensePlate();
	const brand = useBrand();
	const yearCar = useYearCar();

	function gotoSuccess() {
		navigate("/success");
	}

	return (
		<div className="plan__container">
			<Aside step={2} />
			<Header />
			<div className="plan">
				<div className="plan__back" onClick={() => navigate("/auto")}>
					<img src={back} alt="back" className="auto__back--image" />
					<span>volver</span>
				</div>
				<div className="plan__title">
					<div className="plan__title--main">Mira las coberturas</div>
					<div className="plan__comment">
						Conoce las coberturas para su plan
					</div>
				</div>

				<div className="details">
					<div className="details__table">
						<div className="details__placa">Placa {licensePlate}</div>
						<div className="details__model">
							{brand} {yearCar}
						</div>
						<a href="#" className="details__link">
							editar
						</a>
					</div>
					<div className="details__image"></div>
				</div>

				<div className="plan__coverage">
					<div className="plan__subtitle">Agrega o quita coberturas</div>
				</div>
				<div className="plan__options">
					<div className="plan__options--one">protege a tu auto</div>
					<div className="plan__options--two">protege a los que te rodean</div>
					<div className="plan__options--three">mejora tu plan</div>
				</div>
				<div className="coverages">
					<div className="coverages__item">
						<img src={robo} alt="robo" />
						<span>Llanta robada</span>
						<img src={chevron} alt="desplegable" />
					</div>
					<div className="coverages__item">
						<img src={choque} alt="choque" />
						<span>Choque y/o pasarte la luz roja</span>
						<img src={chevron} alt="desplegable" />
					</div>
					<div className="coverages__item">
						<img src={perdida} alt="perdida" />
						<span>Atropello en la vía Evitamiento</span>
						<img src={chevron} alt="desplegable" />
					</div>
				</div>
			</div>

			<div className="right">
				<div className="right__price">
					<div>
						<div className="right__price--value">$35.00</div>
						<span>mensuales</span>
					</div>
					<img src={shield} alt="shield" />
				</div>
				<hr />
				<div className="right__list">
					El precio incluye:
					<ul className="right__title">
						<li className="right__item">
							<img src={check} alt="check" className="right__item--icon" />
							Llanta de repuesto
						</li>
						<li className="right__item">
							<img src={check} alt="check" className="right__item--icon" />
							analisis de motor
						</li>
						<li className="right__item">
							<img src={check} alt="check" className="right__item--icon" />
							Aros gratis
						</li>
					</ul>
				</div>
				<button className="right__button" onClick={gotoSuccess}>
					lo quiero
				</button>
			</div>
		</div>
	);
};

export default Plan;
