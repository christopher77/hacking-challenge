import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import SimpleInput from "../../components/SimpleInput/SimpleInput";
import "./Auto.scss";
import car from "../../images/icon_car.svg";
import back from "../../images/icon_Back.png";
import { navigate } from "@reach/router";

const Auto = () => {
	const propsAño = {
		nombre: "Año",
		tipo: "string",
		max: 9,
		value: "simple",
	};
	const propsMarca = {
		nombre: "Marca",
		tipo: "string",
		max: 9,
		value: "simple",
	};
	function goPlan() {
		navigate("/plan");
	}
	return (
		<div className="auto__container">
			<Header />
			<Aside />
			<div className="auto">
				<div className="auto__back">
					<img src={back} alt="back" className="auto__back-image" />
					<span>volver</span>
				</div>
				<div className="auto__title">
					¡Hola,<span className="auto__title--red"> Juan!</span>
					<p className="auto__simple">Completa los datos de tu auto</p>
				</div>
				<SimpleInput {...propsAño} />
				<SimpleInput {...propsMarca} />
				<div className="auto__gas">
					<div className="auto__gas--question">¿Tu auto es a gas?</div>
					<div className="auto__gas--radios">
						<input type="radio" name="gas" value="si" />
						si<br></br>
						<input type="radio" name="gas" value="no" checked />
						no
					</div>
				</div>
				<div className="auto__secure">
					<div className="auto__secure--details">
						<span>Indica la suma asegurada</span>
						<span>Min $12.500 Max $16.500</span>
					</div>
					<div className="auto__secure--amount">$14.300</div>
				</div>

				<button class="auto__button" onClick={goPlan}>
					continuar
				</button>
			</div>
			<div className="help">
				<div className="help__title">ayuda</div>
				<hr />
				<div className="help__content">
					¿No encuentras el modelo?
					<img src={car} alt="" />
				</div>
				<a href="#" className="help__link">
					click aqui
				</a>
			</div>
		</div>
	);
};

export default Auto;
