import "./SimpleInput.scss";
import React from "react";

function SimpleInput(props) {
	const setProperty = props.setProperty;

	function onChangeInput(event) {
		setProperty(event.target.value);
		// const realValue = event.target.value;
		// realValue.match(/[0-9]{8}$/) ? setProperty(realValue) : console.log("no");
	}

	return props.complex ? (
		<div className="identification">
			<select className="identification__select" name="document" id="document">
				<option value="dni">DNI</option>
				<option value="passport">PASSPORT</option>
				<option value="other">OTHER</option>
			</select>
			<hr />
			<div className="identification__group">
				<input
					className="identification__input"
					maxLength={props.max}
					type={props.tipo}
					onChange={onChangeInput}
					autoFocus={true}
					required
				></input>
				<label className="identification__label">{props.nombre}</label>
			</div>
		</div>
	) : (
		<div className="wrapper">
			<div className="wrapper__group">
				<input
					className="wrapper__input"
					maxLength={props.max}
					onChange={onChangeInput}
					type={props.tipo}
					required
				/>
				<label className="wrapper__label">{props.nombre}</label>
			</div>
		</div>
	);
}

export default SimpleInput;
