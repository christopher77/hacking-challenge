import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import "./Auto.scss";
import car from "../../images/icon_car.svg";
import back from "../../images/icon_Back.png";
import { navigate } from "@reach/router";
import { useName } from "../../redux/selectors/selectors";
import chevron from "../../images/chevrot.png";
import {
	useAddYearCar,
	useAddBrand,
	useAddGas,
	useAddAmount,
} from "../../redux/action/action-hooks";
import add from "../../images/add.png";
import remove from "../../images/remove.png";
import Modal from "../../components/ui/modal";

const Auto = () => {
	const years = [2017, 2018, 2019, 2020, 2021];
	const brands = ["volkswagen", "Toyota", "Mercedes", "Ferrari"];
	const addYearCar = useAddYearCar();
	const addBrand = useAddBrand();
	const addGas = useAddGas();

	const name = useName();
	const addAmount = useAddAmount();
	const [amount, setAmount] = React.useState(14300);
	const [showModal, setShowModal] = React.useState(false);

	function handleChangeYear(event) {
		console.log(event.target.value);
		addYearCar(event.target.value);
	}

	function handleChangeBrand(event) {
		console.log(event.target.value);
		addBrand(event.target.value);
	}
	function onChangeValue(event) {
		console.log(event.target.value);
		const gas = event.target.value === "si" ? true : false;
		addGas(gas);
	}

	function goPlan() {
		if (amount <= 16500 && amount >= 12500) {
			addAmount(amount);
			navigate("/plan");
		} else {
			openModal();
		}
	}
	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className="auto__container">
			<Header />
			<Aside step={1} />
			<div className="auto">
				<div className="auto__back" onClick={() => navigate("/")}>
					<img src={back} alt="back" className="auto__back--image" />
					<span>volver</span>
				</div>
				<div className="auto__title">
					¡Hola,<span className="auto__title--red"> {name}!</span>
					<p className="auto__simple">Completa los datos de tu auto</p>
				</div>

				<div className="combo">
					<select
						className="combo__select"
						onChange={handleChangeYear}
						name="year"
						id="year"
					>
						{years.map((year) => (
							<option value={year}>{year}</option>
						))}
					</select>
					<img src={chevron} alt="chevron" className="combo__chevron" />
				</div>

				<div className="combo">
					<select
						className="combo__select"
						onChange={handleChangeBrand}
						name="brand"
						id="brand"
					>
						{brands.map((brand) => (
							<option value={brand}>{brand}</option>
						))}
					</select>
					<img src={chevron} alt="chevron" className="combo__chevron" />
				</div>
				<div className="auto__gas">
					<div className="auto__gas--question">¿Tu auto es a gas?</div>
					<div className="auto__gas--radios" onChange={onChangeValue}>
						<input type="radio" name="gas" value="si" />
						si
						<br />
						<input type="radio" name="gas" value="no" />
						no
					</div>
				</div>
				<hr />
				<div className="auto__secure">
					<div className="auto__secure--details">
						<span>Indica la suma asegurada</span>
						<span>Min $12,500 Max $16,500</span>
					</div>
					<div className="auto__secure--amount">
						<img
							src={remove}
							alt="remove"
							onClick={() => setAmount(amount - 100)}
						/>
						$ {amount}
						<img src={add} alt="add" onClick={() => setAmount(amount + 100)} />
					</div>
				</div>
				<button className="auto__button" onClick={goPlan}>
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

			{showModal && (
				<Modal>
					<h2 className="messageTitle">Monto Actual ${amount} no valido</h2>
					<h3 className="messageModal">
						Monto valido desde $12500 hasta $16500
					</h3>
					<button className="buttonConfirm" onClick={closeModal}>
						OK
					</button>
				</Modal>
			)}
		</div>
	);
};

export default Auto;
