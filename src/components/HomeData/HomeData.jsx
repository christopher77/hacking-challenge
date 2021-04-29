import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import SimpleInput from "../SimpleInput/SimpleInput";
import "./HomeData.scss";
import {
	useAddCardID,
	useAddCellphone,
	useAddLicensePlate,
} from "../../redux/action/action-hooks";

function HomeData(props) {
	const [cardID, setCardID] = React.useState("");
	const [cellphone, setCellphone] = React.useState("");
	const [placa, setPlaca] = React.useState("");
	// const [isEnabled, setIsEnabled] = React.useState(false);
	const addCardID = useAddCardID();
	const addCellphone = useAddCellphone();
	const addLicensePlate = useAddLicensePlate();

	const propsDocument = {
		nombre: "Nro. de doc",
		tipo: "string",
		max: 8,
		complex: true,
		setProperty: setCardID,
	};
	const propsCellphone = {
		nombre: "Celular",
		tipo: "string",
		max: 9,
		complex: false,
		setProperty: setCellphone,
	};
	const propsPlaca = {
		nombre: "Placa",
		tipo: "string",
		max: 6,
		complex: false,
		setProperty: setPlaca,
	};

	function handleSubmit(event) {
		event.preventDefault();
		addCardID(cardID);
		addCellphone(cellphone);
		addLicensePlate(placa);
		navigate("/auto");
	}

	return (
		<form onSubmit={handleSubmit} className="home">
			<div className="home__title">Déjanos tus datos</div>
			<SimpleInput {...propsDocument} />
			<SimpleInput {...propsCellphone} />
			<SimpleInput {...propsPlaca} />
			<div className="terms">
				<input
					className="terms__check"
					type="checkbox"
					id="terms"
					name="terms"
					value="terms"
					required={true}
				/>
				<label className="terms__label">
					Acepto la{" "}
					<a href="#">
						Politica de Datos Personales y los Términos y Condiciones
					</a>
				</label>
			</div>
			<button
				type="submit"
				className="start__button"
				//  disabled={!isEnabled}
			>
				cotízalo
			</button>
		</form>
	);
}

export default HomeData;
