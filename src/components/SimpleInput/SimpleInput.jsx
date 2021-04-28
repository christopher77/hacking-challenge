import "./SimpleInput.scss";

function SimpleInput(props) {
	return props.value === "complex" ? (
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
					onChange={props.onChange}
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
					type={props.tipo}
					required
				/>
				<label className="wrapper__label">{props.nombre}</label>
			</div>
		</div>
	);
}

export default SimpleInput;
