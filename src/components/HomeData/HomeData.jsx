import { navigate } from "@reach/router";
import React from "react";
import SimpleInput from "../SimpleInput/SimpleInput";
import "./HomeData.scss";
// import { useAddhomeData } from "./../../redux/action/action-hooks";

function HomeData(props) {
	const propsDNI = {
		nombre: "Nro de documento",
		tipo: "string",
		max: 8,
		value: "complex",
	};
	const propsCelular = {
		nombre: "Celular",
		tipo: "string",
		max: 9,
		value: "simple",
	};
	const propsPlaca = {
		nombre: "Placa",
		tipo: "string",
		max: 9,
		value: "simple",
	};

	function goAuto() {
		navigate("/auto");
	}

	return (
		<div className="home">
			<div className="home__title">Déjanos tus datos</div>
			<SimpleInput {...propsDNI} />
			<SimpleInput {...propsCelular} />
			<SimpleInput {...propsPlaca} />
			<div className="terms">
				<input
					className="terms__check"
					type="checkbox"
					id="terminos"
					name="terminos"
					value="terminos"
					required={true}
				/>
				<label className="terms__label">
					Acepto la{" "}
					<a href="#">
						Politica de Datos Personales y los Términos y Condiciones
					</a>
				</label>
			</div>
			<button type="submit" className="start__button" onClick={goAuto}>
				cotízalo
			</button>
		</div>
	);
}

export default HomeData;
